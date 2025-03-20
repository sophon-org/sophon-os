import Lottie from 'lottie-react';
import Image from 'next/image';
import {Fragment} from 'react';

import {cn} from '@/lib/utils';

import lottieSuccess from '../../../public/confirmationBadge.json';

import type {ReactElement} from 'react';

/************************************************************************************************
 ** WhitelistModalWaitingStep Component
 ** Shows animation while waiting for email confirmation
 ** Features:
 ** - Blurred badge preview
 ** - Informational message about confirming via email
 ** - Responsive design for all screen sizes
 ************************************************************************************************/

export function WhitelistModalWaitingStep(): ReactElement {
	return (
		<Fragment>
			<div className={'flex flex-col items-center px-6 md:px-10'}>
				<Image
					src={'/logo.png'}
					alt={'Sophon Logo'}
					className={'mb-6'}
					quality={90}
					width={120}
					height={48}
				/>
				<p
					className={cn(
						'font-normal tracking-[-0.06em] text-black',
						'text-[32px] leading-[32px]',
						'whitespace-break-spaces text-center pb-4'
					)}>
					{'Go tou your inbox to confirm your email to claim your badge'}
				</p>
			</div>

			<div className={'flex flex-col items-center px-6 py-10'}>
				<div className={'mx-14 size-[200px] blur-lg'}>
					<Lottie
						animationData={lottieSuccess}
						loop={true}
						autoplay={false}
						width={200}
						height={200}
						className={'aspect-square size-[200px]'}
					/>
				</div>
			</div>
		</Fragment>
	);
}
