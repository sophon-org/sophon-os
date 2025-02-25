'use client';

/*****************************************************************************************
 ** Clouds Component
 ** A React port of the CSS 3D Clouds demo with natural wind movement
 ** This component creates an interactive 3D cloud visualization using CSS transforms
 ** Features:
 ** - Natural wind movement from left to right
 ** - Dynamic cloud regeneration with varied distribution
 ** - Multiple cloud texture support
 ** - Continuous cloud flow with natural spacing
 ** - Title reveal animation when clouds reach center
 ** - Responsive to viewport dimensions
 ** - Dramatic size variation for more natural appearance
 ** - Configurable parameters for easy customization
 ** - Smooth initial appearance with blur effect
 *****************************************************************************************/

import {useAnimationFrame} from 'framer-motion';
import {Fragment, useCallback, useEffect, useRef, useState} from 'react';

import type {ReactElement} from 'react';

/*****************************************************************************************
 ** Cloud Configuration Constants
 ** Modify these values to adjust the cloud behavior and appearance
 *****************************************************************************************/

// World scaling factors relative to viewport
const WORLD_CONFIG = {
	widthFactor: 1.0, // World width = viewport width * this factor
	heightFactor: 1.0, // World height = viewport height * this factor
	depthFactor: 1.5, // World depth = viewport height * this factor
	minPerspective: 400, // Minimum perspective value in pixels
	perspectiveFactor: 0.4 // Perspective = viewport height * this factor
};

// Cloud size configuration
const SIZE_CONFIG = {
	minScale: 0.4, // Minimum scale for any cloud
	maxScaleFactor: 1.2, // Base for calculating max scale (+ viewport width / DIVISOR)
	maxScaleDivisor: 800, // Divisor for viewport width contribution to max scale
	maxScaleLimit: 2.0, // Absolute maximum scale for any cloud
	featureCloudMinScaleMultiplier: 1.5, // Feature clouds are at least this much larger
	regularCloudMaxScaleFactor: 1.0, // Regular clouds max out at this portion of the max scale
	featureCloudProbability: 0.3 // Probability (0-1) that a cloud will be a "feature cloud"
};

// Cloud movement configuration
const MOVEMENT_CONFIG = {
	baseWindSpeedDivisor: 1500, // Base wind speed = viewport width / this value
	sizeAdjustmentBase: 1.2, // Base value for size adjustment of wind speed
	sizeAdjustmentFactor: 0.2, // How much size affects wind speed
	windSpeedMinFactor: 0.4, // Minimum wind speed = adjusted speed * this factor
	windSpeedMaxFactor: 1.8, // Maximum wind speed = adjusted speed * this factor
	minRotationSpeed: 0.01, // Minimum rotation speed
	maxRotationSpeed: 0.2, // Maximum rotation speed
	rotationSizeAdjustmentFactor: 0.05 // How much size affects rotation speed
};

// Cloud distribution configuration
const DISTRIBUTION_CONFIG = {
	minCloudCount: 2, // Minimum number of cloud bases
	maxCloudCount: 4, // Maximum number of cloud bases
	cloudCountDivisor: 200, // Cloud count = viewport width / this value (clamped)
	minLayerCount: 3, // Minimum number of layers per cloud
	maxLayerCount: 7, // Maximum number of layers per cloud
	layerCountDivisor: 300, // Base layer count = viewport width / this value (clamped)
	ySpreadFactor: 1, // Y position spread = world height * this factor
	zSpreadFactor: 0.4, // Z position spread = world depth * this factor
	opacityMin: 0.6, // Minimum cloud opacity
	opacityMax: 0.9 // Maximum cloud opacity
};

// Bias configuration for random distribution
const BIAS_CONFIG = {
	featureCloudBiasTarget: 0.7, // Target point in the range (0-1) for feature cloud size bias
	featureCloudBiasInfluence: 0.6 // How strongly the bias affects the random value (0-1)
};

// World container sizing
const CONTAINER_CONFIG = {
	sizeFactor: 1 // Container size = viewport width/height * this factor (capped at MAX_SIZE)
};

// Animation configuration
const ANIMATION_CONFIG = {
	initialDelay: 100, // Delay before starting the appearance animation (in ms)
	fadeInDuration: 1.5, // Duration of the opacity animation (in seconds)
	blurDuration: 1.0, // Duration of the blur animation (in seconds)
	initialBlur: 30, // Initial blur amount (in pixels)
	finalBlur: 0 // Final blur amount (in pixels)
};

type TCloudLayer = {
	x: number;
	y: number;
	z: number;
	a: number;
	s: number;
	speed: number;
	windSpeed: number;
};

type TCloudTexture = {
	name: string;
	file: string;
	opacity: number;
	weight: number;
};

type TComputedWeight = {
	src: string;
	min: number;
	max: number;
};

type TWorldBounds = {
	width: number;
	height: number;
	depth: number;
};

// Helper function to get a random number between min and max
function randomBetween(min: number, max: number): number {
	return min + Math.random() * (max - min);
}

// Helper function to get a random number with bias towards a specific range
function randomBiasedTowards(min: number, max: number, bias: number, influence: number): number {
	const random = Math.random();
	const mix = random * (1 - influence) + bias * influence;
	return min + mix * (max - min);
}

function CloudsComponent(): ReactElement {
	const worldRef = useRef<HTMLDivElement>(null);
	const viewportRef = useRef<HTMLDivElement>(null);
	const [layers, setLayers] = useState<(HTMLImageElement & {data: TCloudLayer})[]>([]);
	const [computedWeights, setComputedWeights] = useState<TComputedWeight[]>([]);
	const [d] = useState(0);
	const [worldXAngle] = useState(0);
	const [worldYAngle] = useState(0);
	const [worldBounds] = useState<TWorldBounds>({
		width: window.innerWidth * WORLD_CONFIG.widthFactor,
		height: window.innerHeight * WORLD_CONFIG.heightFactor,
		depth: window.innerHeight * WORLD_CONFIG.depthFactor
	});
	const textures: TCloudTexture[] = [{name: 'white cloud', file: 'cloud.png', opacity: 1, weight: 0}];

	useEffect(() => {
		if (viewportRef.current) {
			// Make perspective relative to viewport height
			const perspective = Math.max(
				WORLD_CONFIG.minPerspective,
				window.innerHeight * WORLD_CONFIG.perspectiveFactor
			);
			viewportRef.current.style.perspective = `${perspective}px`;
		}
		generate();
	}, [worldBounds]);

	const updateView = useCallback(() => {
		if (worldRef.current) {
			const transform = `translateZ(${d}px) rotateX(${worldXAngle}deg) rotateY(${worldYAngle}deg)`;
			worldRef.current.style.transform = transform;
		}
	}, [d, worldXAngle, worldYAngle]);

	const createCloud = (): HTMLDivElement => {
		const div = document.createElement('div');
		div.className = 'cloudBase';

		// Randomize the starting position more significantly
		// Start clouds at different X positions for a more natural distribution
		// Adjust initial position to match our recycling logic with the centered origin
		const x = randomBetween(-worldBounds.width, worldBounds.width / 2);
		// const x = -worldBounds.width + Math.random() * worldBounds.width;
		const y = randomBetween(-worldBounds.height, worldBounds.height);
		const z = randomBetween(-worldBounds.depth / 2, worldBounds.depth / 2);

		const transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;
		div.style.transform = transform;
		if (worldRef.current) {
			worldRef.current.appendChild(div);
		}

		// Scale cloud layer count based on viewport size
		const baseLayerCount = Math.max(
			DISTRIBUTION_CONFIG.minLayerCount,
			Math.min(
				DISTRIBUTION_CONFIG.maxLayerCount,
				Math.floor(window.innerWidth / DISTRIBUTION_CONFIG.layerCountDivisor)
			)
		);
		const cloudLayerCount = baseLayerCount + Math.round(Math.random() * baseLayerCount);

		// Determine if this will be a "feature cloud" (larger than average)
		const isFeatureCloud = Math.random() < SIZE_CONFIG.featureCloudProbability;

		for (let j = 0; j < cloudLayerCount; j++) {
			const cloud = document.createElement('img') as HTMLImageElement & {
				data: TCloudLayer;
			};
			cloud.style.opacity = '0';

			const r = Math.random();
			let src = 'cloud.png';

			for (const weight of computedWeights) {
				if (r >= weight.min && r <= weight.max) {
					cloud.addEventListener('load', () => {
						// Vary opacity slightly for more natural look
						cloud.style.opacity = `${randomBetween(
							DISTRIBUTION_CONFIG.opacityMin,
							DISTRIBUTION_CONFIG.opacityMax
						)}`;
					});
					src = weight.src;
					break;
				}
			}

			if (computedWeights.length === 0) {
				// Vary opacity slightly for more natural look
				cloud.style.opacity = `${randomBetween(
					DISTRIBUTION_CONFIG.opacityMin,
					DISTRIBUTION_CONFIG.opacityMax
				)}`;
			}

			cloud.src = src;
			cloud.className = 'cloudLayer';

			// Create more variation in cloud layer positioning
			const cloudX = x;
			// Spread out the Y positions more - scale with viewport height
			const ySpread = worldBounds.height * DISTRIBUTION_CONFIG.ySpreadFactor;
			const cloudY = y + randomBetween(-ySpread, ySpread);
			// Create more depth variation - scale with viewport depth
			const zSpread = worldBounds.depth * DISTRIBUTION_CONFIG.zSpreadFactor;
			const cloudZ = z + randomBetween(-zSpread, zSpread);
			// Randomize rotation
			const a = Math.random() * 360;

			// Dramatically wider range of scales for more variety
			// Base scale range depends on viewport size
			const baseMinScale = SIZE_CONFIG.minScale;
			const baseMaxScale = Math.min(
				SIZE_CONFIG.maxScaleLimit,
				SIZE_CONFIG.maxScaleFactor + window.innerWidth / SIZE_CONFIG.maxScaleDivisor
			);

			let s;
			if (isFeatureCloud) {
				// Feature clouds are larger with a bias toward the upper end of the scale range
				s = randomBiasedTowards(
					baseMinScale * SIZE_CONFIG.featureCloudMinScaleMultiplier,
					baseMaxScale,
					BIAS_CONFIG.featureCloudBiasTarget,
					BIAS_CONFIG.featureCloudBiasInfluence
				);
			} else {
				// Regular clouds have a more uniform distribution but still with good variation
				s = randomBetween(baseMinScale, baseMaxScale * SIZE_CONFIG.regularCloudMaxScaleFactor);
			}

			// More varied wind speeds - scale with viewport width and inversely with cloud size
			// Larger clouds move slower for a more realistic effect
			const baseWindSpeed = window.innerWidth / MOVEMENT_CONFIG.baseWindSpeedDivisor;
			const sizeAdjustedSpeed =
				baseWindSpeed * (MOVEMENT_CONFIG.sizeAdjustmentBase - s * MOVEMENT_CONFIG.sizeAdjustmentFactor);
			const windSpeed = randomBetween(
				sizeAdjustedSpeed * MOVEMENT_CONFIG.windSpeedMinFactor,
				sizeAdjustedSpeed * MOVEMENT_CONFIG.windSpeedMaxFactor
			);

			cloud.data = {
				x: cloudX * 0.2,
				y: cloudY * 0.2,
				z: cloudZ,
				a,
				s,
				// Varied rotation speeds - inversely proportional to size
				speed:
					randomBetween(MOVEMENT_CONFIG.minRotationSpeed, MOVEMENT_CONFIG.maxRotationSpeed) *
					(1 - s * MOVEMENT_CONFIG.rotationSizeAdjustmentFactor),
				windSpeed
			};

			const cloudTransform = `translateX(${cloud.data.x}px) translateY(${cloud.data.y}px) translateZ(${cloud.data.z}px) rotateZ(${a}deg) scale(${s})`;
			cloud.style.transform = cloudTransform;

			div.appendChild(cloud);
			setLayers(prev => [...prev, cloud]);
		}

		return div;
	};

	const generate = (): void => {
		if (worldRef.current) {
			while (worldRef.current.firstChild) {
				worldRef.current.removeChild(worldRef.current.firstChild);
			}
		}

		// Reset layers
		setLayers([]);

		const newComputedWeights: TComputedWeight[] = [];
		let total = 0;

		textures.forEach(texture => {
			if (texture.weight > 0) {
				total += texture.weight;
			}
		});

		let accum = 0;
		textures.forEach(texture => {
			if (texture.weight > 0) {
				const w = texture.weight / total;
				newComputedWeights.push({
					src: texture.file,
					min: accum,
					max: accum + w
				});
				accum += w;
			}
		});

		setComputedWeights(newComputedWeights);

		// Scale cloud count based on viewport width
		const baseCloudCount = Math.max(
			DISTRIBUTION_CONFIG.minCloudCount,
			Math.min(
				DISTRIBUTION_CONFIG.maxCloudCount,
				Math.floor(window.innerWidth / DISTRIBUTION_CONFIG.cloudCountDivisor)
			)
		);
		Array.from({length: baseCloudCount}, () => createCloud());
	};

	useEffect(() => {
		updateView();
	}, [d, worldXAngle, worldYAngle, updateView]);

	useAnimationFrame(() => {
		layers.forEach(layer => {
			layer.data.x += layer.data.windSpeed;
			layer.data.a += layer.data.speed;
			const layerRect = layer.getBoundingClientRect();
			const layerX = layerRect.left;

			if (layerX > worldBounds.width) {
				// console.log(layer.data.x, layerX);
				// layer.data.x = -randomBetween(worldBounds.width, 0);
				layer.data.x = -worldBounds.width + Math.random() * (worldBounds.width * 0.3);
				layer.data.y = randomBetween(-worldBounds.height, worldBounds.height);
				layer.data.z = randomBetween(-worldBounds.depth / 2, worldBounds.depth / 2);
			}

			const transform = `translateX(${layer.data.x}px) translateY(${layer.data.y}px) translateZ(${
				layer.data.z
			}px) rotateY(${-worldYAngle}deg) rotateX(${-worldXAngle}deg) rotateZ(${
				layer.data.a
			}deg) scale(${layer.data.s})`;
			layer.style.transform = transform;
		});
	});

	return (
		<div
			id={'viewport'}
			ref={viewportRef}
			className={'pointer-events-none fixed inset-0 z-0 overflow-hidden'}>
			<div
				id={'world'}
				ref={worldRef}
				className={'preserve-3d pointer-events-none absolute inset-0 transform-gpu'}
				style={{
					width: `${window.innerWidth * CONTAINER_CONFIG.sizeFactor}px`,
					height: `${window.innerHeight * CONTAINER_CONFIG.sizeFactor}px`
				}}
			/>
		</div>
	);
}

export function Clouds(): ReactElement {
	const [isMounted, setIsMounted] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [blurAmount, setBlurAmount] = useState(ANIMATION_CONFIG.initialBlur);

	// Handle component mounting
	useEffect(() => {
		setIsMounted(true);

		// Trigger the appearance animation after a delay
		const visibilityTimer = setTimeout(() => {
			setIsVisible(true);
		}, ANIMATION_CONFIG.initialDelay);

		return () => {
			clearTimeout(visibilityTimer);
		};
	}, []);

	// Handle blur animation
	useEffect(() => {
		if (isVisible) {
			const blurTimer = setTimeout(() => {
				setBlurAmount(ANIMATION_CONFIG.finalBlur);
			}, 100); // Small delay to ensure the opacity transition has started

			return () => {
				clearTimeout(blurTimer);
			};
		}
	}, [isVisible]);

	if (!isMounted) {
		return <Fragment />;
	}

	return (
		<div
			style={{
				filter: `blur(${blurAmount}px)`,
				transition: `filter ${ANIMATION_CONFIG.blurDuration}s ease-in-out, opacity ${ANIMATION_CONFIG.fadeInDuration}s ease-in-out`,
				opacity: isVisible ? 1 : 0,
				pointerEvents: isVisible ? 'auto' : 'none',
				visibility: isVisible ? 'visible' : 'hidden'
			}}
			className={'pointer-events-none fixed inset-0 z-0 overflow-hidden'}>
			<CloudsComponent />
		</div>
	);
}
