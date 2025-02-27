'use client';

import dynamic from 'next/dynamic';
import {Fragment} from 'react';

import {cn} from '@/lib/utils';

import lottieSuccess from '../../../public/confirmationBadge.json';

import type {ReactElement} from 'react';

const Lottie = dynamic(async () => import('lottie-react'), {ssr: false});

export function WhitelistModalSuccessStep(props: {handleExploreClick: () => void}): ReactElement {
	const {handleExploreClick} = props;

	return (
		<Fragment>
			<div className={'flex flex-col items-center px-6 pb-10'}>
				<div className={'mx-14 size-[200px]'}>
					<Lottie
						animationData={lottieSuccess}
						loop={true}
						autoplay={true}
						width={200}
						height={200}
						className={'aspect-square size-[200px]'}
					/>
				</div>
				<p
					className={cn(
						'font-normal tracking-[-0.06em] text-black',
						'text-[32px] leading-[32px]',
						'whitespace-break-spaces text-center pt-10 pb-4'
					)}>
					{'Success'}
				</p>
				<p
					className={cn(
						'font-normal tracking-[-0.03em] text-black/30',
						'text-[14px] leading-[18px]',
						'whitespace-break-spaces text-center'
					)}>
					{"You're on the list! We’ll send you an email with further instructions on how to get your badge."}
				</p>
				<div className={'mt-10 max-md:w-full'}>
					<button
						onClick={handleExploreClick}
						className={'button-regular max-md:w-full'}>
						{'Explore'}
					</button>
				</div>
			</div>
		</Fragment>
	);
}
