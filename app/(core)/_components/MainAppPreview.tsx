import {motion} from 'framer-motion';
import Image from 'next/image';

import Badge from '@/components/badge';
import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

const apps = {
	sophonHome: {
		title: 'Sophon Home',
		pearl: '/sophonHome/pearl.png',
		description:
			'Your gateway to the Sophon Ecosystem. Discover apps and build up your profile and reputation across the value layer of the internet.'
	},
	sophonAccount: {
		title: 'Sophon Account',
		pearl: '/sophonAccount/pearl.png',
		description:
			'A smart contract-based account system that lets you use crypto as easily as any other digital service. Sign in with familiar methods, set your own security rules, and never worry about losing access.'
	},
	sophonPlus: {
		title: 'Sophon+',
		pearl: '/sophonAccount/pearl.png',
		description:
			'Loyalty reimagined. Get rewarded for your achievements - both online & onchain. Exchange your collected points for a range of rewards & tangible benefits.'
	}
};

export function MainAppPreview(): ReactElement {
	return (
		<div className={'relative mt-20 grid max-w-[1200px] gap-20 md:grid-cols-3 md:gap-8 md:px-11 md:pt-16'}>
			<div className={'hidden flex-col justify-between gap-4 md:flex md:gap-16 md:py-[104px]'}>
				<motion.div
					animate={{y: [0, -15, 0]}}
					transition={{
						duration: 4,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'flex flex-col items-center text-center transition-all duration-300'}>
					<div className={'pb-6'}>
						<Badge
							title={apps.sophonHome.title}
							pearl={apps.sophonHome.pearl}
						/>
					</div>
					<p
						className={cn(
							'text-white',
							'max-w-[368px] md:max-w-[800px] md:whitespace-break-spaces',
							'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
							'text-[16px] leading-[18px] tracking-[-0.02em]'
						)}>
						{apps.sophonHome.description}
					</p>
				</motion.div>
				<motion.div
					animate={{y: [0, -10, 0]}}
					transition={{
						duration: 5,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'flex flex-col items-center text-center transition-all duration-300'}>
					<div className={'pb-6'}>
						<Badge
							title={apps.sophonAccount.title}
							pearl={apps.sophonAccount.pearl}
						/>
					</div>
					<p
						className={cn(
							'text-white',
							'max-w-[368px] md:max-w-[800px] md:whitespace-break-spaces',
							'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
							'text-[16px] leading-[18px] tracking-[-0.02em]'
						)}>
						{apps.sophonAccount.description}
					</p>
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
				className={'relative z-10 flex items-end transition-all duration-300'}>
				<Image
					src={'/mock.png'}
					alt={'Phone'}
					quality={90}
					className={'transition-all duration-700 hover:scale-[102%]'}
					width={373}
					height={436}
				/>
			</motion.div>

			<div className={'flex flex-col items-center justify-center gap-20 md:gap-0'}>
				<motion.div
					animate={{y: [0, -15, 0]}}
					transition={{
						duration: 4,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'flex flex-col items-center text-center transition-all duration-300 md:hidden'}>
					<div className={'pb-6'}>
						<Badge
							title={apps.sophonHome.title}
							pearl={apps.sophonHome.pearl}
						/>
					</div>
					<p
						className={cn(
							'text-white',
							'max-w-[368px] md:max-w-[800px] md:whitespace-break-spaces',
							'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
							'text-[16px] leading-[18px] tracking-[-0.02em]'
						)}>
						{apps.sophonHome.description}
					</p>
				</motion.div>
				<motion.div
					animate={{y: [0, -10, 0]}}
					transition={{
						duration: 5,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'flex flex-col items-center text-center transition-all duration-300 md:hidden'}>
					<div className={'pb-6'}>
						<Badge
							title={apps.sophonAccount.title}
							pearl={apps.sophonAccount.pearl}
						/>
					</div>
					<p
						className={cn(
							'text-white',
							'max-w-[368px] md:max-w-[800px] md:whitespace-break-spaces',
							'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
							'text-[16px] leading-[18px] tracking-[-0.02em]'
						)}>
						{apps.sophonAccount.description}
					</p>
				</motion.div>

				<motion.div
					animate={{y: [0, -12, 0]}}
					transition={{
						duration: 4.5,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'flex flex-col items-center text-center transition-all duration-300'}>
					<div className={'pb-6'}>
						<Badge
							title={apps.sophonPlus.title}
							pearl={apps.sophonPlus.pearl}
						/>
					</div>
					<p
						className={cn(
							'text-white',
							'max-w-[368px] md:max-w-[800px] md:whitespace-break-spaces',
							'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
							'text-[16px] leading-[18px] tracking-[-0.02em]'
						)}>
						{apps.sophonPlus.description}
					</p>
				</motion.div>
			</div>
		</div>
	);
}
