import { Component } from 'solid-js'

import { app } from "../common/app"
import flowerImage from "../assets/flower.svg"
import css from './Daisy.module.scss'

export const Daisy: Component = () => {
	const { tap } = app
	return (
		<img
			class={css.daisy}
			draggable="false"
			width="280"
			height="280"
			onClick={tap}
			src={flowerImage}
		/>
	)
}
