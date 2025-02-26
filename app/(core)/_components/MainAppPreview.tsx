import {motion} from 'framer-motion';
import Image from 'next/image';

import type {ReactElement} from 'react';

export function MainAppPreview(): ReactElement {
	return (
		<div className={'relative mt-20 flex max-w-[1200px] flex-row gap-4 md:gap-[50px] md:px-11 md:pt-16'}>
			<div className={'flex flex-col justify-between gap-4 md:gap-16'}>
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
				className={
					'absolute z-10 mt-[50%] items-end px-6 transition-all duration-300 md:relative md:mt-0 md:flex md:px-0'
				}>
				<Image
					src={'/appPreview/phones.png'}
					alt={'Phone'}
					quality={90}
					className={'transition-all duration-700 hover:scale-[102%]'}
					width={373}
					height={436}
				/>
			</motion.div>
			<div className={'flex flex-col justify-between gap-4 md:gap-24'}>
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
