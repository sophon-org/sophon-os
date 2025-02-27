import localFont from 'next/font/local';

import './globals.css';

import type {Metadata} from 'next';
import type {ReactElement} from 'react';

const altehaasGrotesk = localFont({
	variable: '--font-altehaasgrotesk',
	src: [
		{
			path: './fonts/AlteHaasGroteskRegular.ttf',
			style: 'normal',
			weight: '400'
		},
		{
			path: './fonts/AlteHaasGroteskBold.ttf',
			style: 'normal',
			weight: '700'
		}
	]
});

export const metadata: Metadata = {
	title: 'Sophon',
	description: 'A Breath of Fresh Air',
	openGraph: {
		title: 'Sophon',
		description: 'A Breath of Fresh Air',
		url: 'https://sophon.xyz',
		siteName: 'Sophon',
		images: [
			{
				url: 'https://sophon-fresh-air-git-main.builtby.dad/og.png', // Must be an absolute URL
				width: 1200,
				height: 600
			}
		],
		locale: 'en_US',
		type: 'website'
	}
};

export default function RootLayout(
	props: Readonly<{
		children: React.ReactNode;
	}>
): ReactElement {
	const {children} = props;

	return (
		<html
			lang={'en'}
			className={'bg-white'}>
			<body
				style={{
					background: 'linear-gradient(180deg, #5CABE6 0%, #8EDCFF 100%)'
				}}
				className={`${altehaasGrotesk.variable} relative flex flex-col antialiased`}>
				<div
					className={'pointer-events-none fixed inset-0 z-0 h-screen w-screen'}
					style={{
						backgroundImage: 'url(/noise.png)',
						backgroundRepeat: 'repeat',
						backgroundSize: '110px',
						backgroundPosition: 'center',
						backgroundBlendMode: 'overlay'
					}}
				/>
				<main className={'min-w-screen relative z-0 min-h-screen'}>{children}</main>
			</body>
		</html>
	);
}
