import { useNavigate } from '@solidjs/router'
import { Component } from 'solid-js'

import { app } from '../common/app'
import dzIcon from "../assets/images/dz_24x24_3x.png"
import chevronRightIcon from "../assets/images/chevron_right_24.svg"
import css from './UpgradeListItem.module.scss'
import { Row } from './Row'

type Props = {
	id: string
}

export const UpgradeListItem: Component<Props> = (props) => {
	const { store } = app
	const data = () => store.upgrades.find(({id}) => id === props.id)!
	const level = () => {
		if (props.id === "multi_flower") {
			return store.multi_flower
		}
		if (props.id === "water_power") {
			return store.water_power
		}
	}
	const navigate = useNavigate()
	return (
		<Row
			class={css.container}
			onClick={() => navigate(`/grow/farm/${data().id}`)}
			>
			<img
				draggable="false"
				width={data().iconWidth}
				height={data().iconHeight}
				src={data().icon}
			/>
			<div class={css.textContainer}>
				<div class={css.title}>
					{data().title}
				</div>
				<div class={css.subtitle}>
					{level()} lvl
				</div>
			</div>
			<img
				draggable="false"
				width="24"
				height="24"
				src={dzIcon}
			/>
			<div class={css.chevronLabel}>
				{data().cost(level()!)}
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
