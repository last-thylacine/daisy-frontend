import createTween from '@solid-primitives/tween'

import { app } from "../common/app"
import { fmtNumber } from '../common/fmtNumber'

export const useCoins = () => {
	const { store } = app
	const tweenedCoins = createTween(() => store.coins || 0, { duration: 250 })
	const integerTweenedCoins = () => Math.round(tweenedCoins())
	const formattedCoinBalance = () => fmtNumber(integerTweenedCoins())
	const coinBalanceFontSize = () => `${56 - 2 * Math.log10(store.coins || 1)}px`
	return { formattedCoinBalance, coinBalanceFontSize }
}
