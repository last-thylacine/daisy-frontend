import createTween from '@solid-primitives/tween'

import { app } from "../common/app"
import { formatBalance } from '../common/formatBalance'

export const useBalance = () => {
	const { store } = app
	const tweenedCoins = createTween(() => store.coins, { duration: 250 })
	const integerTweenedCoins = () => Math.round(tweenedCoins())
	const formattedBalance = () => formatBalance(integerTweenedCoins())
	const balanceFontSize = () => `${56 - 2 * Math.log10(store.coins)}px`
	return { formattedBalance, balanceFontSize }
}
