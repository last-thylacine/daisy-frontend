import { Component } from 'solid-js'

import { fmtNumber } from '../common/fmtNumber'
import dzIcon from "../assets/dz_24x24_3x.png"
import { Row } from './Row'
import { Column } from './Column'
import css from './TaskListItem.module.scss'

type Props = {
	icon: string
	title: string
	value: number
	subtitle: string
}

export const TaskListItem: Component<Props> = (props) => {
	return (
		<Column class={css.container}>
			<img
				width="40"
				height="40"
				src={props.icon}
			/>
			<div class={css.title}>{props.title}</div>
			<Row>
				<img
					width="24"
					height="24"
					src={dzIcon}
				/>
				<div class={css.value}>{`+${fmtNumber(props.value)}`}</div>
			</Row>
			{props.subtitle && (
				<div class={css.subtitle}>{props.subtitle}</div>
			)}
		</Column>
	)
}
