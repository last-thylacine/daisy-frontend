import { Component, For } from 'solid-js'

import { app } from '../common/app'
import farmImage from "../assets/farm_82.13x80_3x.png"
import { UpgradeListItem } from './UpgradeListItem'
import css from './Upgrades.module.scss'

const t = {
	title: 'Farm',
	subtitle: 'How a farm works',
}

export const Upgrades: Component = () => {
	const { store } = app
	return (
		<>
			<img
				draggable="false"
				width="82.13"
				height="80"
				src={farmImage} />
			<div class={css.title}>{t.title}</div>
			<div class={css.subtitle}>{t.subtitle}</div>
			<For each={store.upgrades}>
				{(upgrade) => <UpgradeListItem {...upgrade} />}
			</For>
		</>
	)
}
