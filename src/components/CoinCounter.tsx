import { Component } from 'solid-js'

import { useCoins } from '../hooks/useCoins'
import dzFlowerImage from "../assets/images/dz_64x64_3x.png"
import { Row } from './Row'
import css from './CoinCounter.module.scss'

export const CoinCounter: Component = () => {
	const { formattedCoinBalance, coinBalanceFontSize } = useCoins()
	return (
		<Row class={css.container}>
			<img
				draggable="false"
				width="64"
				height="64"
				src={dzFlowerImage}/>
			<div
				class={css.text}
				style={{ 'font-size': coinBalanceFontSize() }}>
				{formattedCoinBalance()}
			</div>
		</Row>
	)
}
