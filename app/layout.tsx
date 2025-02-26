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
	description: 'A Breath of Fresh Air'
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
			<body className={`${altehaasGrotesk.variable} relative flex flex-col antialiased`}>
				<main
					className={'min-w-screen relative z-0 min-h-screen'}
					style={{
						background: 'linear-gradient(180deg, #5CABE6 0%, #8EDCFF 100%)'
					}}>
					{children}
				</main>
			</body>
		</html>
	);
}
