import {motion} from 'framer-motion';
import Image from 'next/image';

import Badge from '@/components/badge';
import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

export function MainAppSophonAccount(): ReactElement {
	return (
		<div className={'mt-[200px] flex flex-col md:mt-60'}>
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
					'text-center md:whitespace-break-spaces'
				)}>
				{'A single account to explore\nweb3 with safety and ease'}
			</h2>
			<p
				className={cn(
					'mx-auto text-white pt-6',
					'max-w-sm md:max-w-[800px] md:whitespace-break-spaces',
					'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
					'text-[16px] leading-[18px] tracking-[-0.02em]'
				)}>
				{
					'An easy to use, friendly, wallet that allows you to interact onchain without external wallets and extensions. You can sign up with normal SSO options like google and approving transactions can happen directly in the dApp.'
				}
			</p>
			<div className={'relative mt-10 flex max-w-[800px] flex-row gap-4 md:gap-6'}>
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
				<div className={'flex flex-col gap-4 md:gap-6'}>
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
