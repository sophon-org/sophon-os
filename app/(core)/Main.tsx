'use client';

import {Fragment} from 'react';

import {MainAppPreview} from '@/app/(core)/_components/MainAppPreview';
import {MainAppSophonAccount} from '@/app/(core)/_components/MainAppSophonAccount';
import {MainAppSophonHome} from '@/app/(core)/_components/MainAppSophonHome';
import {MainAppSophonPlus} from '@/app/(core)/_components/MainAppSophonPlus';
import {MainHero} from '@/app/(core)/_components/MainHero';
import {MainSubscribeBanner} from '@/app/(core)/_components/MainSubscribeBanner';
import {WhitelistModal} from '@/app/(core)/_components/WhitelistModal';
import Footer from '@/components/footer';
import {useTransitionStore} from '@/lib/transition-store';

import type {ReactElement} from 'react';

export default function Main(): ReactElement {
	const {isMainVisible, mainBlurAmount} = useTransitionStore();

	return (
		<Fragment>
			<div
				id={'main'}
				style={{
					filter: `blur(${mainBlurAmount}px)`,
					transition: 'filter 1s ease-in-out, opacity 1.5s ease-in-out',
					pointerEvents: isMainVisible ? 'auto' : 'none',
					visibility: isMainVisible ? 'visible' : 'hidden',
					opacity: isMainVisible ? 1 : 0
				}}
				className={'relative z-50 flex flex-col items-center pt-20 text-center max-md:px-6'}>
				<MainHero />
				<MainAppPreview />
				<MainAppSophonHome />
				<MainAppSophonAccount />
				<MainAppSophonPlus />
				<MainSubscribeBanner />
				<Footer />
			</div>
			<WhitelistModal />
		</Fragment>
	);
}
