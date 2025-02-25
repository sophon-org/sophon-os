'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';
import {Fragment} from 'react';

import Badge from '@/components/badge';
import Footer from '@/components/footer';
import {Logo} from '@/components/logo';
import {useTransitionStore} from '@/lib/transition-store';
import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

function MainHero(): ReactElement {
	return (
		<Fragment>
			<Logo className={'mb-10 text-white'} />
			<h1
				className={cn(
					'font-normal -tracking-wider text-white',
					'md:text-[96px] md:leading-[80px]',
					'text-[48px] leading-[48px]',
					'whitespace-break-spaces'
				)}>
				{'A Breath\nof Fresh Air'}
			</h1>
			<p
				className={cn(
					'mx-auto text-white pt-6',
					'max-w-sm md:max-w-[560px] whitespace-break-spaces',
					'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
					'text-[16px] leading-[18px] tracking-[-0.02em]'
				)}>
				{'Sophon is taking crypto to consumers by making it intuitive, familiar, and value-adding to all.'}
			</p>

			<div className={'pt-10'}>
				<button className={'button-glass'}>{'Join Waitlist'}</button>
			</div>
		</Fragment>
	);
}

function MainAppPreview(): ReactElement {
	return (
		<div className={'relative mt-20 flex max-w-[1200px] flex-row gap-[50px] px-11 pt-16'}>
			<div className={'flex flex-col justify-between gap-16'}>
				<motion.div
					animate={{y: [0, -15, 0]}}
					transition={{
						duration: 4,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'transition-all duration-300'}>
					<Image
						src={'/appPreview/profile.png'}
						alt={'User profile'}
						quality={90}
						className={'transition-all duration-700 hover:scale-[102%]'}
						width={320}
						height={151}
					/>
				</motion.div>
				<motion.div
					animate={{y: [0, -10, 0]}}
					transition={{
						duration: 5,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'transition-all duration-300'}>
					<Image
						src={'/appPreview/topApps.png'}
						alt={'Top apps'}
						quality={90}
						className={'transition-all duration-700 hover:scale-[102%]'}
						width={320}
						height={264}
					/>
				</motion.div>
			</div>
			<motion.div
				animate={{y: [0, -10, 0]}}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'reverse',
					ease: 'easeInOut'
				}}
				className={'flex items-end transition-all duration-300'}>
				<Image
					src={'/appPreview/phones.png'}
					alt={'Phone'}
					quality={90}
					className={'transition-all duration-700 hover:scale-[102%]'}
					width={373}
					height={436}
				/>
			</motion.div>
			<div className={'flex flex-col justify-between gap-24'}>
				<motion.div
					animate={{y: [0, -8, 0]}}
					transition={{
						duration: 3,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'transition-all duration-300'}>
					<Image
						src={'/appPreview/rewards.png'}
						alt={'Rewards'}
						quality={90}
						className={'transition-all duration-700 hover:scale-[102%]'}
						width={320}
						height={277}
					/>
				</motion.div>
				<motion.div
					animate={{y: [0, -12, 0]}}
					transition={{
						duration: 4.5,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'transition-all duration-300'}>
					<Image
						src={'/appPreview/friends.png'}
						alt={'Friends'}
						quality={90}
						className={'transition-all duration-700 hover:scale-[102%]'}
						width={320}
						height={107}
					/>
				</motion.div>
			</div>
		</div>
	);
}

function MainAppSophonHome(): ReactElement {
	return (
		<div className={'mt-60 flex flex-col'}>
			<div className={'mx-auto pb-6'}>
				<Badge
					title={'Sophon Home'}
					pearl={'/sophonHome/pearl.png'}
				/>
			</div>
			<h2
				className={cn(
					'font-bold tracking-[-0.06em] text-white',
					'md:text-[44px] md:leading-[48px]',
					'text-[32px] leading-[36px]',
					'whitespace-break-spaces text-center'
				)}>
				{'Your gateway to the\nSophon Ecosystem.'}
			</h2>
			<p
				className={cn(
					'mx-auto text-white pt-6',
					'max-w-sm md:max-w-[800px] whitespace-break-spaces',
					'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
					'text-[16px] leading-[18px] tracking-[-0.02em]'
				)}>
				{
					'A platform where users can manage their onchain assets, discover Apps and build up their profile and reputation across the ecosystem. As we evolve the home dApp, it will become an activity hub that shows your status and latest updates across all dApps in the Sophon ecosystem.'
				}
			</p>
			<div className={'relative mt-10 flex max-w-[800px] flex-row gap-6'}>
				<div className={'flex flex-col gap-6'}>
					<motion.div
						animate={{y: [0, -15, 0]}}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut'
						}}
						className={'transition-all duration-300'}>
						<Image
							src={'/sophonHome/assets.png'}
							className={'transition-all duration-700 hover:scale-[102%]'}
							alt={'Assets'}
							quality={90}
							width={440}
							height={120}
						/>
					</motion.div>
					<motion.div
						animate={{y: [0, -10, 0]}}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut'
						}}
						className={'transition-all duration-300'}>
						<Image
							src={'/sophonHome/discover.png'}
							className={'transition-all duration-700 hover:scale-[102%]'}
							alt={'Discover'}
							quality={90}
							width={440}
							height={336}
						/>
					</motion.div>
				</div>
				<motion.div
					animate={{y: [0, -10, 0]}}
					transition={{
						duration: 6,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'flex items-end transition-all duration-300'}>
					<Image
						src={'/sophonHome/profile.png'}
						alt={'Profile'}
						quality={90}
						className={'transition-all duration-700 hover:scale-[102%]'}
						width={336}
						height={480}
					/>
				</motion.div>
			</div>
		</div>
	);
}

function MainAppSophonAccount(): ReactElement {
	return (
		<div className={'mt-60 flex flex-col'}>
			<div className={'mx-auto pb-6'}>
				<Badge
					title={'Sophon Account'}
					pearl={'/sophonAccount/pearl.png'}
				/>
			</div>
			<h2
				className={cn(
					'font-bold tracking-[-0.06em] text-white',
					'md:text-[44px] md:leading-[48px]',
					'text-[32px] leading-[36px]',
					'whitespace-break-spaces text-center'
				)}>
				{'A single account to explore\nweb3 with safety and ease'}
			</h2>
			<p
				className={cn(
					'mx-auto text-white pt-6',
					'max-w-sm md:max-w-[800px] whitespace-break-spaces',
					'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
					'text-[16px] leading-[18px] tracking-[-0.02em]'
				)}>
				{
					'An easy to use, friendly, wallet that allows you to interact onchain without external wallets and extensions. You can sign up with normal SSO options like google and approving transactions can happen directly in the dApp.'
				}
			</p>
			<div className={'relative mt-10 flex max-w-[800px] flex-row gap-6'}>
				<motion.div
					animate={{y: [0, -10, 0]}}
					transition={{
						duration: 6,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'flex items-end transition-all duration-300'}>
					<Image
						src={'/sophonAccount/wallet.png'}
						alt={'Profile'}
						quality={90}
						className={'transition-all duration-700 hover:scale-[102%]'}
						width={336}
						height={480}
					/>
				</motion.div>
				<div className={'flex flex-col gap-6'}>
					<motion.div
						animate={{y: [0, -15, 0]}}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut'
						}}
						className={'transition-all duration-300'}>
						<Image
							src={'/sophonAccount/balances.png'}
							className={'transition-all duration-700 hover:scale-[102%]'}
							alt={'Assets'}
							quality={90}
							width={440}
							height={152}
						/>
					</motion.div>
					<motion.div
						animate={{y: [0, -10, 0]}}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut'
						}}
						className={'transition-all duration-300'}>
						<Image
							src={'/sophonAccount/feed.png'}
							className={'transition-all duration-700 hover:scale-[102%]'}
							alt={'Discover'}
							quality={90}
							width={440}
							height={304}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

function MainAppSophonPlus(): ReactElement {
	return (
		<div className={'mt-60 flex flex-col'}>
			<div className={'mx-auto pb-6'}>
				<Badge
					title={'Sophon+'}
					pearl={'/sophonAccount/pearl.png'}
				/>
			</div>
			<h2
				className={cn(
					'font-bold tracking-[-0.06em] text-white',
					'md:text-[44px] md:leading-[48px]',
					'text-[32px] leading-[36px]',
					'whitespace-break-spaces text-center'
				)}>
				{'Get rewarded for doing what you enjoy'}
			</h2>
			<p
				className={cn(
					'mx-auto text-white pt-6',
					'max-w-sm md:max-w-[800px] whitespace-break-spaces',
					'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
					'text-[16px] leading-[18px] tracking-[-0.02em]'
				)}>
				{
					'A loyalty program that rewards you for exploring the Sophon ecosystem. Exchange your collected points for a range of rewards including tokens, rare collectibles and early access to new products and features.'
				}
			</p>
			<div className={'relative mt-10 flex max-w-[800px] flex-col gap-6'}>
				<div className={'flex flex-row gap-6'}>
					<motion.div
						animate={{y: [0, -10, 0]}}
						transition={{
							duration: 6,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut'
						}}
						className={'flex items-end transition-all duration-300'}>
						<Image
							src={'/sophonPlus/points.png'}
							alt={'Profile'}
							quality={90}
							className={'transition-all duration-700 hover:scale-[102%]'}
							width={240}
							height={120}
						/>
					</motion.div>
					<motion.div
						animate={{y: [0, -10, 0]}}
						transition={{
							duration: 3,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut'
						}}
						className={'flex items-end transition-all duration-300'}>
						<Image
							src={'/sophonPlus/streak.png'}
							alt={'Profile'}
							quality={90}
							className={'transition-all duration-700 hover:scale-[102%]'}
							width={536}
							height={120}
						/>
					</motion.div>
				</div>
				<div className={'flex flex-row gap-6'}>
					<motion.div
						animate={{y: [0, -15, 0]}}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut'
						}}
						className={'transition-all duration-300'}>
						<Image
							src={'/sophonPlus/tasks.png'}
							className={'transition-all duration-700 hover:scale-[102%]'}
							alt={'Assets'}
							quality={90}
							width={419}
							height={336}
						/>
					</motion.div>
					<motion.div
						animate={{y: [0, -10, 0]}}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut'
						}}
						className={'transition-all duration-300'}>
						<Image
							src={'/sophonPlus/activity.png'}
							className={'transition-all duration-700 hover:scale-[102%]'}
							alt={'Discover'}
							quality={90}
							width={357}
							height={336}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

function MainSubscribeBanner(): ReactElement {
	return (
		<div className={'relative mt-60 aspect-[1200/560] w-full max-w-[1200px]'}>
			<div className={'flex size-full flex-col items-center justify-center gap-10'}>
				<h3
					className={cn(
						'font-bold -tracking-wider text-white',
						'md:text-[56px] md:leading-[56px]',
						'text-[32px] leading-[36px]',
						'whitespace-break-spaces text-center'
					)}>
					{'Subscribe for early access\nto Sophon Home'}
				</h3>
				<div>
					<button className={'button-regular'}>{'Join Waitlist'}</button>
				</div>
			</div>

			<div className={'absolute inset-0'}>
				<div>
					<Image
						src={'/pearlBanners/topLeft.png'}
						alt={''}
						className={'absolute left-[18%] top-[7.14%] size-[4.66vw] max-h-[56px] max-w-[56px]'}
						quality={90}
						width={56}
						height={56}
					/>
					<Image
						src={'/pearlBanners/middleLeft.png'}
						alt={''}
						className={'absolute left-[4.66%] top-1/4 size-[6.66vw] max-h-[80px] max-w-[80px]'}
						quality={90}
						width={80}
						height={80}
					/>
					<Image
						src={'/pearlBanners/bottomLeft.png'}
						alt={''}
						className={'absolute left-[6.25%] top-[59.64%] size-[13vw] max-h-[160px] max-w-[160px]'}
						quality={90}
						width={160}
						height={160}
					/>
				</div>
				<div>
					<Image
						src={'/pearlBanners/topRight.png'}
						alt={''}
						className={'absolute right-[16.75%] top-[9.82%] size-[3.33vw] max-h-[40px] max-w-[40px]'}
						quality={90}
						width={40}
						height={40}
					/>
					<Image
						src={'/pearlBanners/middleRight.png'}
						alt={''}
						className={'absolute right-[7%] top-[15%] size-[6.66vw] max-h-[80px] max-w-[80px]'}
						quality={90}
						width={80}
						height={80}
					/>
					<Image
						src={'/pearlBanners/bottomRight.png'}
						alt={''}
						className={'absolute right-[2.08%] top-[51.25%] size-[20vw] max-h-[240px] max-w-[240px]'}
						quality={90}
						width={240}
						height={240}
					/>
				</div>
			</div>
		</div>
	);
}
export default function Main(): ReactElement {
	const {isMainVisible, mainBlurAmount} = useTransitionStore();

	return (
		<div
			id={'main'}
			style={{
				filter: `blur(${mainBlurAmount}px)`,
				transition: 'filter 1s ease-in-out, opacity 1.5s ease-in-out',
				pointerEvents: isMainVisible ? 'auto' : 'none',
				visibility: isMainVisible ? 'visible' : 'hidden',
				opacity: isMainVisible ? 1 : 0
			}}
			className={'relative z-50 flex flex-col items-center pt-20 text-center'}>
			<MainHero />
			<MainAppPreview />
			<MainAppSophonHome />
			<MainAppSophonAccount />
			<MainAppSophonPlus />
			<MainSubscribeBanner />

			<div className={'mt-[-600px]'}>
				<div className={'flex w-full flex-row items-end justify-center overflow-x-clip'}>
					<Image
						src={'/bigLeftCloud.png?v=2'}
						alt={''}
						className={'-mb-28'}
						quality={90}
						width={1960}
						height={1098}
					/>
					<Image
						src={'/bigRightCloud.png?v=2'}
						alt={''}
						className={'-mb-28'}
						quality={90}
						width={2023}
						height={1133}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
