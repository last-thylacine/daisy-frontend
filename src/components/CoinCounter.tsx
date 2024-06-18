import { Component } from 'solid-js'

import { useBalance } from '../hooks/useBalance'
import dzFlowerImage from "../assets/dz_64x64_3x.png"
import { Row } from './Row'
import css from './CoinCounter.module.scss'

export const CoinCounter: Component = () => {
	const { formattedBalance, balanceFontSize } = useBalance()
	return (
		<Row class={css.container}>
			<img
				width="64"
				height="64"
				src={dzFlowerImage}/>
			<div
				class={css.text}
				style={{ 'font-size': balanceFontSize() }}>
				{formattedBalance()}
			</div>
		</Row>
	)
}
