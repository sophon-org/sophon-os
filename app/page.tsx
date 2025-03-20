import {Suspense} from 'react';

import {Landing} from '@/app/(core)/Landing';

import type {ReactElement} from 'react';

/*****************************************************************************************
 ** Main Page Component
 ** Coordinates the transition between Splash and Main components
 ** Features:
 ** - Cloud background effect
 ** - Coordinated blur transitions between components
 ** - Responsive layout
 *****************************************************************************************/

export default function Page(): ReactElement {
	return (
		<Suspense>
			<Landing />
		</Suspense>
	);
}
