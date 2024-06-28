import { Component, JSX } from 'solid-js'

import { TASKS } from '../common/TASKS'
import { fmtNumber } from '../common/fmtNumber'
import dzIcon from "../assets/images/dz_24x24_3x.png"
import { Row } from './Row'
import { Column } from './Column'
import css from './TaskListItem.module.scss'

type Props = {
	id: string
	onClick?: JSX.HTMLAttributes<HTMLDivElement>["onClick"]
}

export const TaskListItem: Component<Props> = (props) => {
	const data = () => TASKS.find(({id}) => id === props.id)!
	return (
		<Column
			onClick={props.onClick}
			class={css.container}>
			<img
				draggable="false"
				width="40"
				height="40"
				src={data().icon}
			/>
			<div class={css.title}>
				{data().title}
			</div>
			<Row>
				<img
					draggable="false"
					width="24"
					height="24"
					src={dzIcon}
				/>
				<div class={css.reward}>
					{`+${fmtNumber(data().reward)}`}
				</div>
			</Row>
		</Column>
	)
}
