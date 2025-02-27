import {Logo} from '@/components/logo';
import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

export function MainHero(): ReactElement {
	return (
		<div className={'flex flex-col items-center justify-center'}>
			<Logo className={'mb-10 text-white'} />
			<h1
				className={cn(
					'font-normal -tracking-wider text-white',
					'md:text-[96px] md:leading-[80px]',
					'text-[48px] leading-[48px]',
					'md:whitespace-break-spaces'
				)}>
				{'Sophon OS'}
			</h1>
			<p
				className={cn(
					'mx-auto text-white pt-6',
					'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
					'text-[16px] leading-[18px] tracking-[-0.02em]'
				)}>
				{'[v 0.1]'}
			</p>
			<p
				className={cn(
					'mx-auto text-white pt-6',
					'max-w-[300px] md:max-w-[560px] md:whitespace-break-spaces',
					'md:text-[20px] md:leading-[24px] md:tracking-[-0.02em]',
					'text-[16px] leading-[18px] tracking-[-0.02em]'
				)}>
				{
					'Powering the next generation of consumer apps with crypto.  Making everyday digital lifestyle experiences more valuable, more connected, and more rewarding.'
				}
			</p>

			<div className={'pt-10 max-md:w-full'}>
				<button
					onClick={() => document?.getElementById('trigger-whitelist-modal')?.click()}
					className={'button-regular max-md:w-full'}>
					{'Join Waitlist'}
				</button>
			</div>
		</div>
	);
}
