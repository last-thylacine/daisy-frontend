import { Component } from 'solid-js'
import createTween from '@solid-primitives/tween'

import { app } from "../common/app"
import { formatBalance } from '../common/formatBalance'
import dzFlowerImage from "../assets/dz_64x64_3x.png"
import { Row } from './Row'
import css from './CoinCounter.module.scss'

export const CoinCounter: Component = () => {
	const { store } = app
	const tweenedCoins = createTween(() => store.coins, { duration: 500 })
	return (
		<Row class={css.container}>
			<img
				width="64"
				height="64"
				src={dzFlowerImage}
			/>
			<div class={css.text}>
				{formatBalance(tweenedCoins())}
			</div>
		</Row>
	)
}
