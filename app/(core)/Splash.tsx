'use client';
import {motion} from 'framer-motion';
import {useSearchParams} from 'next/navigation';
import {useEffect, useState} from 'react';

import {Logo} from '@/components/logo';
import {useTransitionStore} from '@/lib/transition-store';
import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

/*****************************************************************************************
 ** Splash Component
 ** Displays an initial splash screen with a cloud-like disappearing effect
 ** Features:
 ** - Cloud-like blur transition effect when button is clicked
 ** - Smooth opacity and blur animations
 ** - Coordinates with Main component for seamless transitions
 ** - Sequential transition: Splash fades 80% before Main appears
 ** - Skips splash screen when modal query parameters are present
 ** - Responsive design for different screen sizes
 *****************************************************************************************/
export default function Splash(): ReactElement {
	const searchParams = useSearchParams();
	const [shouldSplashOut, setShouldSplashOut] = useState(false);
	const [blurAmount, setBlurAmount] = useState(0);
	const [fadeProgress, setFadeProgress] = useState(0);
	const {setMainVisible, setMainBlur} = useTransitionStore();

	// Check for modal query parameters on mount
	useEffect(() => {
		const hasModalParam = searchParams.get('modal') === 'whitelist';
		const hasStepParam = !!searchParams.get('step');

		// Skip splash screen if modal parameters are present
		if (hasModalParam || hasStepParam) {
			setBlurAmount(20);
			setFadeProgress(100);
			setShouldSplashOut(true);
			// Make main visible immediately
			setMainVisible(true);
			setMainBlur(0);
		}
	}, [searchParams, setMainVisible, setMainBlur]);

	// Handle the cloud-like blur effect when button is clicked
	const handleSplashOut = (): void => {
		setBlurAmount(20);
		setFadeProgress(100);
		setTimeout(() => {
			setShouldSplashOut(true);
			window.scrollTo({top: 0, behavior: 'smooth'});
		}, 300);
	};

	// When Splash is completely faded out, then make Main visible
	useEffect(() => {
		if (shouldSplashOut) {
			// Wait for splash to fully fade out before showing Main
			const timeout = setTimeout(() => {
				// Make Main visible only after Splash has disappeared
				setMainVisible(true);
				// Start with full blur on Main, then quickly clear it
				setMainBlur(20);

				// After a short delay, unblur Main for a smooth entrance
				const unblurTimeout = setTimeout(() => {
					setMainBlur(0);
				}, 300);

				return () => clearTimeout(unblurTimeout);
			}, 1000); // Full fade-out transition takes about 1000ms

			return () => clearTimeout(timeout);
		}
	}, [shouldSplashOut, setMainBlur, setMainVisible]);

	return (
		<motion.div
			id={`splash-${shouldSplashOut ? 'out' : 'in'}`}
			initial={{opacity: 1}}
			animate={{opacity: shouldSplashOut ? 0 : 1}}
			exit={{opacity: 0}}
			transition={{duration: 1}}
			style={{
				filter: `blur(${blurAmount}px)`,
				transition: 'filter 2s ease-in-out',
				pointerEvents: shouldSplashOut ? 'none' : 'auto',
				opacity: 1 - (fadeProgress / 100) * 0.8 // Gradually reduce opacity as blur increases
			}}
			className={
				'fixed inset-0 z-20 flex flex-col items-center justify-center gap-8 bg-transparent text-center backdrop-blur-sm'
			}>
			<Logo className={'text-white'} />
			<h1
				className={cn(
					'font-bold -tracking-wider text-white',
					'md:text-[80px] md:leading-[72px]',
					'text-[48px] leading-[48px]',
					'whitespace-break-spaces uppercase'
				)}>
				{'Ready for a breath\nof fresh air?'}
			</h1>
			<div className={'pt-6'}>
				<button
					onClick={handleSplashOut}
					className={'button-glass'}>
					{'Take a breath'}
				</button>
			</div>
		</motion.div>
	);
}
