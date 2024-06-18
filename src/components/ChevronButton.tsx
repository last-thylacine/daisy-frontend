import { Component } from 'solid-js'

import farmIcon from "../assets/"
import css from './ChevronButton.module.scss'

export const ChevronButton: Component = (props) => {
	return (
		<div class={css.container}>
			<img
				width="96"
				height="96"
				src={props.icon}
			/>
		</div>
	)
}
