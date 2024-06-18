import { Component } from 'solid-js'

import farmIcon from "../assets/farm_48x46.76_3x.png"
import { Column } from './Column'
import css from './FarmButton.module.scss'

const t = {
	label: "Farm",
}

export const FarmButton: Component = () => {
	return (
		<Column class={css.button}>
			<img
				width="48"
				height="46.76"
				src={farmIcon}
			/>
			<div class={css.label}>
				{t.label}
			</div>
		</Column>
	)
}
