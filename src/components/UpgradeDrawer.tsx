import { useNavigate } from '@solidjs/router'
import { Component } from 'solid-js'

import { app } from '../common/app'
import { Drawer } from './Drawer'
import css from './UpgradeDrawer.module.scss'

type Props = {
	id: string
}

export const UpgradeDrawer: Component<Props> = (props) => {
	const { store } = app
	const data = () => store.upgrades.find(({id}) => id === props.id)!
	const navigate = useNavigate()
	const level = () => {
		if (props.id === "multi_flower") {
			return store.multi_flower
		}
		if (props.id === "water_power") {
			return store.water_power
		}
	}
	return (
		<Drawer onClose={() => navigate("/grow/farm/")}>
			<img
				draggable="false"
				width={data().imageWidth}
				height={data().imageHeight}
				src={data().image}
			/>
			<div class={css.title}>
				{data().title}
			</div>
			<div class={css.description}>
				{data().description}
			</div>
			<div class={css.effect}>
				{data().effect.replace('{{level}}', String(level()))}
			</div>
		</Drawer>
	)
}
