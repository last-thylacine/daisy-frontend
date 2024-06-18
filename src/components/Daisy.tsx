import { Component } from 'solid-js'

import { app } from "../common/app"
import flowerImage from "../assets/flower.svg"
import css from './Daisy.module.scss'

export const Daisy: Component = () => {
	const { tap } = app
	return (
		<img
			onClick={tap}
			class={css.daisy}
			src={flowerImage}
		/>
	)
}
