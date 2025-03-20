import {AnimatePresence, motion} from 'framer-motion';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {Fragment, useCallback, useEffect} from 'react';

import {WhitelistModalEmailStep} from '@/app/(core)/_components/WhitelistModalEmailStep';
import {WhitelistModalSuccessStep} from '@/app/(core)/_components/WhitelistModalSuccessStep';
import {WhitelistModalWaitingStep} from '@/app/(core)/_components/WhitelistModalWaitingStep';
import {Cross} from '@/components/cross';
import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

/************************************************************************************************
 ** ModalContent Component
 ** Handles the different steps of the whitelist modal flow
 ** Features:
 ** - Email collection step
 ** - Waiting for confirmation step
 ** - Success step with animation
 ** - Smooth transitions between steps
 ************************************************************************************************/
function ModalContent({handleClose}: {handleClose: () => void}): ReactElement {
	const searchParams = useSearchParams();
	const router = useRouter();
	const step = searchParams.get('step') || 'email';

	const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		// Navigate to waiting step after email submission
		const params = new URLSearchParams(searchParams);
		params.set('step', 'waiting');
		router.push(`?${params.toString()}`);

		// The actual email verification would be handled externally
		// The user will receive an email with a confirmation link
		// When they click that link, they'll be redirected to the success step
	};

	const handleExploreClick = (): void => {
		handleClose();
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
				{step === 'email' && (
					<motion.div
						key={'email-step'}
						layout
						initial={{opacity: 0, filter: 'blur(20px)'}}
						animate={{opacity: 1, filter: 'blur(0px)'}}
						exit={{opacity: 0, filter: 'blur(20px)'}}
						transition={{duration: 1}}
						className={'flex w-full flex-col'}>
						<WhitelistModalEmailStep handleEmailSubmit={handleEmailSubmit} />
					</motion.div>
				)}

				{step === 'waiting' && (
					<motion.div
						key={'waiting-step'}
						layout
						initial={{opacity: 0, filter: 'blur(20px)'}}
						animate={{opacity: 1, filter: 'blur(0px)'}}
						exit={{opacity: 0, filter: 'blur(20px)'}}
						transition={{duration: 1}}
						className={'flex w-full flex-col'}>
						<WhitelistModalWaitingStep />
					</motion.div>
				)}

				{step === 'success' && (
					<motion.div
						key={'success-step'}
						layout
						initial={{opacity: 0, filter: 'blur(20px)'}}
						animate={{opacity: 1, filter: 'blur(0px)'}}
						exit={{opacity: 0, filter: 'blur(20px)'}}
						transition={{duration: 1}}
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

/************************************************************************************************
 ** WhitelistModal Component
 ** Modal dialog controlled by URL query parameters
 ** Features:
 ** - URL-driven modal state (open/closed)
 ** - Multi-step flow for whitelist registration
 ** - Smooth animations for transitions
 ** - Backdrop blur effect
 ************************************************************************************************/
export function WhitelistModal(): ReactElement {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const isOpen = searchParams.get('modal') === 'whitelist';

	// Handle opening the modal
	const handleOpen = useCallback((): void => {
		const params = new URLSearchParams(searchParams);
		params.set('modal', 'whitelist');
		params.set('step', 'email');
		router.push(`?${params.toString()}`);
	}, [searchParams, router]);

	// Handle closing the modal
	const handleClose = useCallback((): void => {
		const params = new URLSearchParams(searchParams);
		params.delete('modal');
		params.delete('step');
		router.push(params.toString() ? `?${params.toString()}` : pathname);
	}, [searchParams, router, pathname]);

	// Detect and open modal when direct success URL is accessed
	useEffect(() => {
		const step = searchParams.get('step');
		const modal = searchParams.get('modal');

		// If success step is directly accessed but modal isn't open, open it
		if (step === 'success' && modal !== 'whitelist') {
			const params = new URLSearchParams(searchParams);
			params.set('modal', 'whitelist');
			router.replace(`?${params.toString()}`);
		}
	}, [searchParams, router]);

	// Effect to handle ESC key to close modal
	useEffect(() => {
		const handleEscKey = (event: KeyboardEvent): void => {
			if (event.key === 'Escape' && isOpen) {
				handleClose();
			}
		};

		window.addEventListener('keydown', handleEscKey);
		return () => window.removeEventListener('keydown', handleEscKey);
	}, [isOpen, handleClose]);

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
				className={'pointer-events-none invisible absolute hidden size-0'}>
				{'Join Waitlist'}
			</button>
		</Fragment>
	);
}
