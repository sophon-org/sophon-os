import type {ReactElement} from 'react';

export function Spinner({className = 'text-white'}: {className?: string}): ReactElement {
	return (
		<svg
			width={'26'}
			height={'26'}
			viewBox={'0 0 26 26'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			className={className}>
			<path
				d={'M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1'}
				stroke={'currentColor'}
				strokeWidth={'2'}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
			/>
		</svg>
	);
}
