import {motion} from 'framer-motion';
import Image from 'next/image';

import type {ReactElement} from 'react';

export function MainAppPreview(): ReactElement {
	return (
		<div className={'relative mt-20 grid max-w-[1200px] gap-20 lg:grid-cols-3 lg:gap-8 lg:px-11 lg:pt-16'}>
			<div className={'hidden flex-col gap-4 lg:flex lg:gap-8'}>
				<motion.div
					animate={{y: [0, -15, 0]}}
					transition={{
						duration: 4,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'transition-all duration-300'}>
					<div className={'relative overflow-hidden rounded-[32px]'}>
						<Image
							src={'/appPreview/topApps.png'}
							alt={'User profile'}
							quality={90}
							className={
								'rounded-[32px] border-8 border-white/40 transition-all duration-700 hover:scale-[102%]'
							}
							width={344}
							height={266}
						/>
					</div>
				</motion.div>
				<motion.div
					animate={{y: [0, -10, 0]}}
					transition={{
						duration: 5,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'transition-all duration-300 '}>
					<div className={'relative translate-x-[-100px] overflow-hidden rounded-[32px]'}>
						<button onClick={() => document?.getElementById('trigger-whitelist-modal')?.click()}>
							<Image
								src={'/appPreview/sophon+.png'}
								alt={'Sophon+'}
								quality={90}
								className={
									'rounded-[32px] border-8 border-white/40 transition-all duration-700 hover:scale-[102%]'
								}
								width={344}
								height={203}
							/>
						</button>
					</div>
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
					<div className={'relative overflow-hidden rounded-[32px]'}>
						<Image
							src={'/appPreview/ecosystem.png'}
							alt={'Ecosystem'}
							quality={90}
							className={
								'rounded-[32px] border-8 border-white/40 transition-all duration-700 hover:scale-[102%]'
							}
							width={344}
							height={175}
						/>
					</div>
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
				className={'relative z-10 flex items-start transition-all duration-300'}>
				<button onClick={() => document?.getElementById('trigger-whitelist-modal')?.click()}>
					<Image
						src={'/mock.png'}
						alt={'Phone'}
						quality={90}
						className={'transition-all duration-700 hover:scale-[102%]'}
						width={368}
						height={732}
					/>
				</button>
			</motion.div>

			<div className={'hidden flex-col gap-4 md:gap-8 lg:flex'}>
				<div className={'flex h-[400px] flex-col gap-4'}>
					<motion.div
						animate={{y: [0, -15, 0]}}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut'
						}}
						className={'transition-all duration-300'}>
						<div className={'relative overflow-hidden rounded-[32px]'}>
							<Image
								src={'/appPreview/profile.png'}
								alt={'User profile'}
								quality={90}
								className={
									'rounded-[32px] border-8 border-white/40 transition-all duration-700 hover:scale-[102%]'
								}
								width={344}
								height={178}
							/>
						</div>
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
						<div
							className={
								'relative translate-x-[100px] translate-y-[-100px] overflow-hidden rounded-[32px]'
							}>
							<Image
								src={'/appPreview/tweet.png'}
								alt={'Top apps'}
								quality={90}
								className={
									'rounded-[32px] border-8 border-white/40 transition-all duration-700 hover:scale-[102%]'
								}
								width={344}
								height={120}
							/>
						</div>
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
						<div
							className={
								'relative translate-x-[44px] translate-y-[-140px] overflow-hidden rounded-[32px]'
							}>
							<Image
								src={'/appPreview/followers.png'}
								alt={'Top apps'}
								quality={90}
								className={
									'rounded-[32px] border-8 border-white/40 transition-all duration-700 hover:scale-[102%]'
								}
								width={344}
								height={88}
							/>
						</div>
					</motion.div>
				</div>
				<motion.div
					animate={{y: [0, -10, 0]}}
					transition={{
						duration: 5,
						repeat: Infinity,
						repeatType: 'reverse',
						ease: 'easeInOut'
					}}
					className={'transition-all duration-300'}>
					<div className={'relative overflow-hidden rounded-[32px]'}>
						<Image
							src={'/appPreview/section_auth.png'}
							alt={'Top apps'}
							quality={90}
							className={
								'rounded-[32px] border-8 border-white/40 transition-all duration-700 hover:scale-[102%]'
							}
							width={320}
							height={264}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
