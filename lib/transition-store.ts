import {create} from 'zustand';

/*****************************************************************************************
 ** Transition Store
 ** Manages the state for transitions between components
 ** Features:
 ** - Coordinates visibility between Splash and Main components
 ** - Manages blur effects for smooth transitions
 ** - Provides a central state for cross-component animations
 *****************************************************************************************/

type TTransitionState = {
	// Visibility state for Main component
	isMainVisible: boolean;
	setMainVisible: (visible: boolean) => void;

	// Blur amount for Main component
	mainBlurAmount: number;
	setMainBlur: (amount: number) => void;
};

export const useTransitionStore = create<TTransitionState>(set => ({
	// Initially, Main is hidden
	isMainVisible: false,
	setMainVisible: (visible: boolean) => set({isMainVisible: visible}),

	// Initially, Main has maximum blur
	mainBlurAmount: 20,
	setMainBlur: (amount: number) => set({mainBlurAmount: amount})
}));
