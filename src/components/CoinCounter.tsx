import { Component } from 'solid-js'

import { app } from "../common/app"
import dzFlowerImage from "../assets/dz_64x64_3x.png"
import { Row } from './Row'
import css from './CoinCounter.module.scss'

export const CoinCounter: Component = () => {
	const { store } = app
	return (
		<Row class={css.container}>
			<img
				width="64"
				height="64"
				src={dzFlowerImage}
			/>
			<div class={css.text}>
				{store.coins_fmt}
			</div>
		</Row>
	)
}
