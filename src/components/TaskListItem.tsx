import { Component, JSX } from 'solid-js'

import { fmtNumber } from '../common/fmtNumber'
import dzIcon from "../assets/images/dz_24x24_3x.png"
import { Row } from './Row'
import { Column } from './Column'
import css from './TaskListItem.module.scss'

type Props = {
	icon: string
	title: string
	reward: number
	subtitle?: string
	onClick?: JSX.HTMLAttributes<HTMLDivElement>["onClick"]
}

export const TaskListItem: Component<Props> = (props) => {
	return (
		<Column
			onClick={props.onClick}
			class={css.container}>
			<img
				draggable="false"
				width="40"
				height="40"
				src={props.icon}
			/>
			<div class={css.title}>
				{props.title}
			</div>
			<Row>
				<img
					draggable="false"
					width="24"
					height="24"
					src={dzIcon}
				/>
				<div class={css.reward}>
					{`+${fmtNumber(props.reward)}`}
				</div>
			</Row>
			{props.subtitle && (
				<div class={css.subtitle}>
					{props.subtitle}
				</div>
			)}
		</Column>
	)
}
