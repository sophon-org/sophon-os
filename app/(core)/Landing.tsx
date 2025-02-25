'use client';

import {Fragment} from 'react';

import Main from '@/app/(core)/Main';
import Splash from '@/app/(core)/Splash';
import {Clouds} from '@/components/clouds';

import type {ReactElement} from 'react';

export function Landing(): ReactElement {
	return (
		<Fragment>
			<Splash />
			<Main />
			<Clouds />
		</Fragment>
	);
}
