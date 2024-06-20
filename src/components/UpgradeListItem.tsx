import { Component } from 'solid-js'

import dzIcon from "../assets/dz_24x24_3x.png"
import chevronRightIcon from "../assets/chevron_right_24.svg"
import css from './UpgradeListItem.module.scss'
import { Row } from './Row'

type Props = {
	name: string
	level: number
	cost: number
	icon: string
	iconWidth: string
	iconHeight: string
}

export const UpgradeListItem: Component<Props> = (props) => {
	return (
		<Row class={css.container}>
			<img
				draggable="false"
				width={props.iconWidth}
				height={props.iconHeight}
				src={props.icon}
			/>
			<div class={css.textContainer}>
				<div class={css.title}>
					{props.name}
				</div>
				<div class={css.subtitle}>
					{props.level} lvl
				</div>
			</div>
			<img
				draggable="false"
				width="24"
				height="24"
				src={dzIcon}
			/>
			<div class={css.chevronLabel}>
				{props.cost}
			</div>
			<img
				draggable="false"
				width="24"
				height="24"
				src={chevronRightIcon}
			/>
		</Row>
	)
}
