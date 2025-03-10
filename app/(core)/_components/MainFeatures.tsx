import Image from 'next/image';

import PlusIcon from '@/app/(core)/icons/plus.svg';
import Badge from '@/components/badge';
import {cn} from '@/lib/utils';

import type {ReactElement, ReactNode} from 'react';

const apps = {
	sophonHome: {
		badge: (
			<Badge
				title={'Sophon Home'}
				pearl={'/sophonHome/pearl.png'}
			/>
		),
		title: 'Your gateway to the Sophon Ecosystem. ',
		description: 'Discover apps and build up your profile and reputation across the value layer of the internet.'
	},
	sophonAccount: {
		badge: (
			<Badge
				title={'Sophon Account'}
				pearl={'/sophonAccount/pearl.png'}
			/>
		),
		title: 'A single account to explore web3 with safety and ease.',
		description: 'Sign in with familiar methods, set your own security rules, and never worry about losing access.'
	},
	sophonPlus: {
		badge: (
			<Badge
				title={'Sophon+'}
				pearl={'/sophonPlus/pearl.png'}
			/>
		),
		title: 'Loyalty reimagined.',
		description:
			'Get rewarded for your achievements — both online & onchain. Exchange your collected points for a range of rewards & tangible benefits.'
	},
	sophonUnified: {
		badge: (
			<Badge
				className={'border-2 border-white/60 bg-white/10'}
				title={
					<Image
						src={'/pixelated.png'}
						alt={'Sophon Unified'}
						width={112}
						height={16}
					/>
				}
				pearl={'/sophonUnified/pearl.png'}
			/>
		),
		title: 'Unifying your fragmented digital world.',
		description: (
			<p className={'text-[16px] leading-[24px] md:text-[18px]'}>
				{'The'}
				<Image
					src={'/pixelated.png'}
					alt={'Sophon Unified'}
					width={112}
					height={16}
					className={'mx-1 inline align-text-bottom'}
				/>
				{'will change how you control, connect, and capitalize on your online presence.'}
			</p>
		)
	}
};

export function MainFeatures(): ReactElement {
	return (
		<div className={'relative z-10 flex w-full max-w-[1200px] flex-col items-center justify-center md:px-8'}>
			<div className={'my-12 flex w-full items-center gap-4 md:my-32'}>
				<PlusIcon className={'size-5 text-white'} />
				<div className={'h-px w-full bg-white'} />
				<PlusIcon className={'size-5 text-white'} />
			</div>
			<section className={'z-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2'}>
				<FeatureTile {...apps.sophonHome} />
				<FeatureTile {...apps.sophonAccount} />
				<FeatureTile {...apps.sophonPlus} />
				<FeatureTile
					{...apps.sophonUnified}
					isTransparent
				/>
			</section>
		</div>
	);
}

type TFeatureTileProps = {
	badge: ReactNode;
	title: string;
	description: ReactNode;
	isTransparent?: boolean;
};

function FeatureTile({title, badge, description, isTransparent = false}: TFeatureTileProps): ReactElement {
	return (
		<div
			className={cn(
				'relative p-6 rounded-xl text-white border-white/60',
				'flex flex-col h-full text-left',
				isTransparent
					? 'bg-transparent dashed-border'
					: 'bg-white/5 backdrop-blur-md border shadow-[inset_0_0_80px_0_#FFFFFF4D]'
			)}>
			<div className={'absolute left-4 top-4'}>{badge}</div>
			<div className={'mt-32 flex flex-1 flex-col gap-4'}>
				<h2 className={'text-3xl font-bold'}>{title}</h2>
				<div
					className={cn(
						'md:text-[18px] md:leading-[24px] md:tracking-[-0.02em]',
						'text-[16px] leading-[18px] tracking-[-0.02em]'
					)}>
					{description}
				</div>
			</div>
		</div>
	);
}
