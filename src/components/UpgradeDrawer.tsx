/* eslint solid/reactivity: 0 */ 
import { useNavigate } from '@solidjs/router'
import { Component } from 'solid-js'
import { produce } from 'solid-js/store'

import { app } from '../common/app'
import { api } from '../common/api'
import coinIcon from "../assets/images/dz_32x32_3x.png"
import { Drawer } from './Drawer'
import css from './UpgradeDrawer.module.scss'
import { Row } from './Row'

const t = {
	submit: "Go ahead",
}

type Props = {
	id: string
}

export const UpgradeDrawer: Component<Props> = (props) => {
	const { store, setStore } = app
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
	const close = () => navigate("/grow/farm/")
	const handleSubmit = () => {
		if (
			props.id === "multi_flower" &&
			store.multi_flower !== null &&
			store.coins !== null
		) {
			const resulting_balance = store.coins - data().cost(level()!)
			const resulting_level = store.multi_flower + 1
			if (resulting_balance >= 0) {
				api.upgrade_buy(1, resulting_level)
				setStore(
					produce((state) => {
						state.coins = resulting_balance
						state.multi_flower = resulting_level
					})
				)
			}
		}
		if (
			props.id === "water_power" &&
			store.water_power !== null &&
			store.coins !== null
		) {
			const resulting_balance = store.coins - data().cost(level()!)
			const resulting_level = store.water_power + 1
			if (resulting_balance >= 0) {
				api.upgrade_buy(2, resulting_level)
				setStore(
					produce((state) => {
						state.coins = resulting_balance
						state.water_power = resulting_level
					})
				)
			}
		}
	}
	return (
		<Drawer onClose={close}>
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
			<Row>
				<img
					draggable="false"
					width="40"
					height="40"
					src={coinIcon}
				/>
				<div class={css.cost}>
					{data().cost(level()!)}
				</div>
				<div class={css.level}>
					{level()! + 1} lvl
				</div>
			</Row>
			<div
				onClick={handleSubmit}
				class={css.button}>
				{t.submit}
			</div>
		</Drawer>
	)
}
