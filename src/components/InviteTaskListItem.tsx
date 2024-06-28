import { Component, JSX } from 'solid-js'

import { INVITE_TASKS } from '../common/INVITE_TASKS'
import { fmtNumber } from '../common/fmtNumber'
import dzIcon from "../assets/images/dz_24x24_3x.png"
import { Row } from './Row'
import { Column } from './Column'
import css from './InviteTaskListItem.module.scss'

type Props = {
	id: string
	onClick?: JSX.HTMLAttributes<HTMLDivElement>["onClick"]
}

export const InviteTaskListItem: Component<Props> = (props) => {
	const data = () => INVITE_TASKS.find(({id}) => id === props.id)!
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
			<Row class={css.title}>
				{data().title}
			</Row>
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
			<div class={css.subtitle}>
				{data().subtitle}
			</div>
		</Column>
	)
}
