import Image from 'next/image';

import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

export default function Badge({title, pearl}: {title: string; pearl: string}): ReactElement {
	return (
		<div className={'w-fit'}>
			<div
				style={{
					boxShadow: '0px 0px 16px 0px #FFFFFFCC inset'
				}}
				className={cn('bg-white pl-2 py-2 pr-3.5 rounded-full', 'flex flex-row gap-2 items-center')}>
				<Image
					src={pearl}
					quality={100}
					className={'aspect-square'}
					alt={''}
					width={24}
					height={24}
				/>
				<p className={cn('text-black font-bold', 'text-[16px] leading-[16px] tracking-[-0.03em]', 'my-1')}>
					{title}
				</p>
			</div>
		</div>
	);
}
