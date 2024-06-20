import { Component, For } from 'solid-js'

import { UPGRADES } from '../common/UPGRADES'
import farmImage from "../assets/farm_82.13x80_3x.png"
import { Drawer } from './Drawer'
import { UpgradeListItem } from './UpgradeListItem'
import css from './FarmDrawer.module.scss'

const t = {
	title: 'Farm',
	subtitle: 'How a farm works',
}

type Props = {
	onClose: () => void
}

export const FarmDrawer: Component<Props> = (props) => {
	return (
		<Drawer onClose={props.onClose}>
			<img
				width="82.13"
				height="80"
				src={farmImage} />
			<div class={css.title}>{t.title}</div>
			<div class={css.subtitle}>{t.subtitle}</div>
			<For each={UPGRADES}>
				{(upgrade) => <UpgradeListItem {...upgrade} />}
			</For>
		</Drawer>
	)
}
