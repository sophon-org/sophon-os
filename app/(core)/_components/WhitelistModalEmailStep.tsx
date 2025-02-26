import Image from 'next/image';
import {Fragment} from 'react';

import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

export function WhitelistModalEmailStep(props: {
	handleEmailSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}): ReactElement {
	const {handleEmailSubmit} = props;

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
					{'Enter email to subscribe for early access to Sophon Home'}
				</p>
				<p
					className={cn(
						'font-normal tracking-[-0.03em] text-black/30',
						'text-[14px] leading-[18px]',
						'whitespace-break-spaces text-center'
					)}>
					{
						'Access will be limited in the early days as we roll out the full set of features. Subscribe now to get early access & be amongst the first to experience something completely new.'
					}
				</p>
			</div>
			<div className={'mt-10 w-full bg-grey px-10 pb-10 pt-6'}>
				<form
					onSubmit={handleEmailSubmit}
					className={'flex flex-row gap-1'}>
					<input
						type={'email'}
						placeholder={'Email'}
						style={{boxShadow: '0px 0px 7px 0px #F9FBFB inset'}}
						className={cn(
							'h-11 w-full rounded-full border border-[#F0F2F2] pl-4',
							'placeholder:text-[#1C1C1C80] text-[16px] leading-[16px] tracking-[-0.03em]'
						)}
					/>
					<button className={'button-regular'}>{'Apply'}</button>
				</form>
			</div>
		</Fragment>
	);
}
