import {AnimatePresence, motion} from 'framer-motion';
import Lottie from 'lottie-react';
import Image from 'next/image';
import {Fragment, useState} from 'react';

import {Cross} from '@/components/cross';
import {cn} from '@/lib/utils';

import lottieSuccess from '../../../public/confirmationBadge.json';

import type {ReactElement} from 'react';

/*****************************************************************************************
 ** WhitelistModal Component
 ** Displays a modal with email input for early access waitlist
 ** Features:
 ** - Cloud-like blur transition effect when opening/closing
 ** - Smooth opacity and blur animations
 ** - Responsive design
 ** - Maintains hidden trigger button for external control
 *****************************************************************************************/

function ModalEmailStep(props: {handleEmailSubmit: (event: React.FormEvent<HTMLFormElement>) => void}): ReactElement {
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

function ModalSuccessStep(props: {handleExploreClick: () => void}): ReactElement {
	const {handleExploreClick} = props;

	return (
		<Fragment>
			<div className={'flex flex-col items-center px-6 pb-10'}>
				<div className={'px-14'}>
					<Lottie
						animationData={lottieSuccess}
						loop={true}
						autoplay={true}
						width={200}
						height={200}
						className={'size-[200px]'}
					/>
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
					{"You're on the list! We'll send you an email with further instructions on how to get your badge."}
				</p>
				<div className={'mt-10 max-md:w-full'}>
					<button
						onClick={handleExploreClick}
						className={'button-regular max-md:w-full'}>
						{'Explore'}
					</button>
				</div>
			</div>
		</Fragment>
	);
}

function ModalContent({handleClose}: {handleClose: () => void}): ReactElement {
	const [step, setStep] = useState<'email' | 'success'>('email');

	const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		setStep('success');
	};

	const handleExploreClick = (): void => {
		setStep('email');
	};

	return (
		<motion.div
			layout
			className={cn(
				'flex flex-col items-center justify-between bg-white rounded-3xl relative',
				'md:max-w-[480px] w-full',
				'pt-20 overflow-hidden'
			)}>
			<AnimatePresence
				mode={'popLayout'}
				initial={false}>
				{step === 'email' ? (
					<motion.div
						key={'email-step'}
						layout
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{duration: 0.1}}
						className={'flex w-full flex-col'}>
						<ModalEmailStep handleEmailSubmit={handleEmailSubmit} />
					</motion.div>
				) : (
					<motion.div
						key={'success-step'}
						layout
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						transition={{duration: 0.1}}
						className={'flex w-full flex-col'}>
						<ModalSuccessStep handleExploreClick={handleExploreClick} />
					</motion.div>
				)}
			</AnimatePresence>
			<div className={'absolute right-6 top-6'}>
				<button
					onClick={handleClose}
					className={'-m-3 p-3'}>
					<Cross className={'text-black'} />
				</button>
			</div>
		</motion.div>
	);
}

export function WhitelistModal(): ReactElement {
	const [isOpen, setIsOpen] = useState(false);

	// Handle opening the modal with blur transition
	const handleOpen = (): void => {
		setIsOpen(true);
	};

	// Handle closing the modal with blur transition
	const handleClose = (): void => {
		setIsOpen(false);
	};

	return (
		<Fragment>
			<div
				id={`whitelist-modal-${isOpen ? 'open' : 'closed'}`}
				onClick={handleClose}
				style={{
					backdropFilter: isOpen ? 'blur(32px)' : 'none',
					transition:
						'backdrop-filter 1.5s ease-in-out, opacity 1.5s ease-in-out, background 1.5s ease-in-out',
					pointerEvents: isOpen ? 'auto' : 'none',
					opacity: isOpen ? 1 : 0,
					background: isOpen ? '#0096F733' : 'transparent'
				}}
				className={cn('fixed inset-0 z-50', isOpen ? '' : 'pointer-events-none')}
			/>

			<AnimatePresence mode={'wait'}>
				{isOpen && (
					<motion.div
						key={'modal-content'}
						id={'whitelist-modal-content'}
						transition={{
							duration: 1.5,
							ease: 'easeInOut'
						}}
						initial={{
							filter: 'blur(20px)',
							opacity: 0,
							scale: 0.95
						}}
						animate={{
							filter: 'blur(0px)',
							opacity: 1,
							scale: 1
						}}
						exit={{
							filter: 'blur(20px)',
							opacity: 0,
							scale: 0.95
						}}
						className={cn('fixed inset-0 z-50 flex flex-col items-center justify-center max-md:px-2')}>
						<ModalContent handleClose={handleClose} />
					</motion.div>
				)}
			</AnimatePresence>

			<button
				id={'trigger-whitelist-modal'}
				onClick={handleOpen}
				className={'pointer-events-none invisible absolute size-0'}>
				{'Join Waitlist'}
			</button>
		</Fragment>
	);
}
