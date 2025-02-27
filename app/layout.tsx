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
	title: 'Sophon OS',
	description: 'A Breath of Fresh Air',
	openGraph: {
		title: 'Sophon OS',
		description: 'A Breath of Fresh Air',
		url: 'https://app.sophon.xyz/',
		siteName: 'Sophon OS',
		images: [
			{
				url: 'https://app.sophon.xyz/og.png', // Must be an absolute URL
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
				className={`${altehaasGrotesk.variable} antialiased`}>
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
				{children}
			</body>
		</html>
	);
}
