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
					<a
						href={
							'https://twitter.com/intent/post?text=I%20just%20claimed%20my%20early%20access%20badge%20to%20the%20full%20%40sophon%20experience!%0A%0AClaim%20yours%20now%3A&url=https%3A%2F%2Fapp.sophon.xyz%2F'
						}
						target={'_blank'}>
						<Lottie
							animationData={lottieSuccess}
							loop={true}
							autoplay={true}
							width={200}
							height={200}
							className={'aspect-square size-[200px]'}
						/>
					</a>
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
					{
						"You've joined the waitlist! Keep an eye on your inbox for instructions on claiming your badge as we roll out the full Sophon Experience."
					}
				</p>
				<div className={'mt-10 max-md:w-full'}>
					<a
						href={
							'https://twitter.com/intent/post?text=I%20just%20claimed%20my%20early%20access%20badge%20to%20the%20full%20%40sophon%20experience!%0A%0AClaim%20yours%20now%3A&url=https%3A%2F%2Fapp.sophon.xyz%2F'
						}
						target={'_blank'}
						className={'button-secondary mx-2 max-md:w-full'}>
						{'Share on X'}
					</a>
					<button
						onClick={handleExploreClick}
						className={'button-regular mx-2 max-md:w-full'}>
						{'Explore'}
					</button>
				</div>
			</div>
		</Fragment>
	);
}
