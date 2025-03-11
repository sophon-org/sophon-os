import Image from 'next/image';
import {Fragment, useRef, useState} from 'react';

import {Spinner} from '@/components/spinner';
import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

/*****************************************************************************************
 ** WhitelistModalEmailStep Component
 ** Handles email collection for waitlist
 ** Features:
 ** - Form for email submission
 ** - Integration with Notion database
 ** - Loading state during submission
 ** - Form validation
 ** - Error handling
 *****************************************************************************************/

export function WhitelistModalEmailStep(props: {
	handleEmailSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}): ReactElement {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const {handleEmailSubmit} = props;

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
		event.preventDefault();
		setIsSubmitting(true);
		setError(null);

		const email = emailInputRef.current?.value;

		if (!email) {
			setError('Please enter your email');
			setIsSubmitting(false);
			return;
		}

		const isSubmitSuccessful = await submitToNotion(email);

		if (isSubmitSuccessful) {
			await handleEmailSubmit(event);
		}

		setIsSubmitting(false);
	}

	const submitToNotion = async (email: string): Promise<boolean> => {
		try {
			const response = await fetch('/api/notion', {
				method: 'POST',
				headers: {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({email})
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to submit email');
			}

			return true;
		} catch (err) {
			console.error('Error submitting email:', err);
			setError(err instanceof Error ? err.message : 'Failed to submit email');
			return false;
		}
	};

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
					{'Be among the first to explore the full Sophon experience'}
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
					onSubmit={handleSubmit}
					className={'flex flex-row gap-1'}>
					<input
						ref={emailInputRef}
						type={'email'}
						placeholder={'Email'}
						required
						style={{boxShadow: '0px 0px 7px 0px #F9FBFB inset'}}
						className={cn(
							'h-11 w-full rounded-full border border-[#F0F2F2] pl-4',
							'placeholder:text-[#1C1C1C80] text-[16px] leading-[16px] tracking-[-0.03em]',
							error ? 'border-red-500 text-red-500' : ''
						)}
					/>
					<button
						disabled={isSubmitting}
						className={'button-regular relative'}>
						<span className={isSubmitting ? 'opacity-0' : ''}>{'Apply'} </span>
						{isSubmitting && (
							<div className={'absolute inset-0 flex items-center justify-center'}>
								<Spinner className={'size-4 animate-spin'} />
							</div>
						)}
					</button>
				</form>
			</div>
		</Fragment>
	);
}
