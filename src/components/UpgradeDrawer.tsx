import { Component, For } from 'solid-js'

import { app } from '../common/app'
import farmImage from "../assets/farm_82.13x80_3x.png"
import { Drawer } from './Drawer'
import { UpgradeListItem } from './UpgradeListItem'
import css from './UpgradeDrawer.module.scss'

const t = {
	confirm: "Go ahead",
}

type Props = {
	onClose: () => void
}

export const UpgradeDrawer: Component<Props> = (props) => {
	const { store } = app
	return (
		<Drawer onClose={props.onClose}>
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
		</Drawer>
	)
}
