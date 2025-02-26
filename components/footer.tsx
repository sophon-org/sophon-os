import Image from 'next/image';
import Link from 'next/link';

import {Logo} from './logo';

import type {ReactElement} from 'react';

export default function Footer(): ReactElement {
	return (
		<footer
			className={'relative z-50 mt-[200px] w-screen bg-white px-4 pt-32 mix-blend-multiply md:mt-[46px] md:px-0'}>
			<div className={'absolute inset-x-0 bottom-[96%] flex w-full flex-row justify-center overflow-x-clip'}>
				<Image
					src={'/bigLeftCloud.png?v=2'}
					alt={''}
					className={'-mr-10 md:-mb-16'}
					quality={90}
					width={1960}
					height={1098}
				/>
				<Image
					src={'/bigRightCloud.png?v=2'}
					alt={''}
					className={'-ml-10 md:-mb-16'}
					quality={90}
					width={2023}
					height={1133}
				/>
			</div>

			<div className={'mx-auto flex max-w-[1200px] flex-wrap gap-x-16 lg:gap-x-[78px]'}>
				<div className={'grid grid-cols-2 gap-10 md:grid-cols-4'}>
					<div className={'hidden md:block'}>
						<Logo />
					</div>

					<div className={'text-left'}>
						<h3 className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black/40'}>{'Company'}</h3>
						<ul className={'mt-2.5 space-y-2'}>
							<li>
								<Link
									href={'https://blog.sophon.xyz/vision'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'Vision'}
								</Link>
							</li>
							<li>
								<Link
									href={'https://docs.sophon.xyz/sophon/introduction/what-is-sophon'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'About'}
								</Link>
							</li>
							<li>
								<Link
									href={'https://twitter.com/sophon'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'X/Twitter'}
								</Link>
							</li>
							<li>
								<Link
									href={'https://discord.gg/sophonhub'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'Discord'}
								</Link>
							</li>
							<li>
								<Link
									href={'https://blog.sophon.xyz/'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'Blog'}
								</Link>
							</li>
						</ul>
					</div>

					<div className={'text-left'}>
						<h3 className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black/40'}>{'Products'}</h3>
						<ul className={'mt-2.5 space-y-2'}>
							<li>
								<Link
									href={'https://portal.sophon.xyz/bridge/'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'Bridge'}
								</Link>
							</li>
							<li>
								<Link
									href={'https://syncswap.xyz/sophon'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'Swap'}
								</Link>
							</li>
							<li>
								<Link
									href={'https://farm.sophon.xyz/'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'Farm'}
								</Link>
							</li>
							<li>
								<Link
									href={'https://portal.sophon.xyz/home/'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'Portal'}
								</Link>
							</li>
						</ul>
					</div>

					<div className={'text-left'}>
						<h3 className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black/40'}>
							{'Developers'}
						</h3>
						<ul className={'mt-2.5 space-y-2'}>
							<li>
								<Link
									href={'https://docs.sophon.xyz/'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'Documentation'}
								</Link>
							</li>
							<li>
								<Link
									href={'https://github.com/sophon-org'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'GitHub'}
								</Link>
							</li>
							<li>
								<Link
									href={'https://explorer.sophon.xyz/'}
									className={'text-[30px] leading-[30px] tracking-[-0.03em] text-black'}>
									{'Explorer'}
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={'mt-10 block md:hidden'}>
				<Logo />
			</div>
			<div className={'mx-auto mt-8 max-w-[1200px] md:mt-16'}>
				<hr className={'w-full border-[#E1E5E5]'} />
				<div className={'flex justify-between pb-10 pt-6 text-[12px]'}>
					<p className={'text-black/40'}>{`© ${new Date().getFullYear()} Sophon.`}</p>
					<div className={'flex gap-x-12'}>
						<a
							className={'leading-none text-black/40 hover:text-black'}
							target={'_blank'}
							href={'https://sophon.xyz/privacypolicy'}>
							{'Privacy'}
						</a>
						<a
							className={'leading-none text-black/40 hover:text-black'}
							target={'_blank'}
							href={'https://sophon.xyz/terms'}>
							{'Terms'}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
