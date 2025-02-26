import {motion} from 'framer-motion';
import Image from 'next/image';

import Badge from '@/components/badge';
import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

export function MainAppSophonPlus(): ReactElement {
	return (
		<div className={'mt-[200px] flex flex-col md:mt-60'}>
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
					'md:whitespace-break-spaces text-center'
				)}>
				{'Get rewarded for doing what you enjoy'}
			</h2>
			<p
				className={cn(
					'mx-auto text-white pt-6',
					'max-w-sm md:max-w-[800px] md:whitespace-break-spaces',
					'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
					'text-[16px] leading-[18px] tracking-[-0.02em]'
				)}>
				{
					'A loyalty program that rewards you for exploring the Sophon ecosystem. Exchange your collected points for a range of rewards including tokens, rare collectibles and early access to new products and features.'
				}
			</p>
			<div className={'relative mt-10 flex max-w-[800px] flex-col gap-4 md:gap-6'}>
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
				<div className={'flex flex-row gap-4 md:gap-6'}>
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
