import Image from 'next/image';
import {Fragment} from 'react';

import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

export function MainSubscribeBanner(): ReactElement {
	return (
		<Fragment>
			<div
				className={'relative z-[60] mt-[200px] aspect-[1200/560] w-full max-w-[1200px] max-md:hidden md:mt-60'}>
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
						<button
							onClick={() => document?.getElementById('trigger-whitelist-modal')?.click()}
							className={'button-regular'}>
							{'Join Waitlist'}
						</button>
					</div>
				</div>

				<div className={'pointer-events-none absolute inset-0'}>
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
			<div className={'relative mt-[200px] aspect-[1200/560] w-full max-w-[1200px] md:mt-60 md:hidden'}>
				<div className={'flex size-full flex-col items-center justify-center gap-10'}>
					<h3
						className={cn(
							'font-normal -tracking-wider text-white',
							'md:text-[56px] md:leading-[56px]',
							'text-[48px] leading-[48px]',
							'md:whitespace-break-spaces text-center'
						)}>
						{'Subscribe for early access\nto Sophon Home'}
					</h3>
					<div className={'w-full'}>
						<button
							onClick={() => document?.getElementById('trigger-whitelist-modal')?.click()}
							className={'button-regular w-full'}>
							{'Join Waitlist'}
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
