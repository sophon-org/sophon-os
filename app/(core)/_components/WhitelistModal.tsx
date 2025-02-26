import {AnimatePresence, motion} from 'framer-motion';
import {Fragment, useState} from 'react';

import {WhitelistModalEmailStep} from '@/app/(core)/_components/WhitelistModalEmailStep';
import {WhitelistModalSuccessStep} from '@/app/(core)/_components/WhitelistModalSuccessStep';
import {Cross} from '@/components/cross';
import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

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
						<WhitelistModalEmailStep handleEmailSubmit={handleEmailSubmit} />
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
						<WhitelistModalSuccessStep handleExploreClick={handleExploreClick} />
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
