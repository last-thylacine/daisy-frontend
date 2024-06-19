import { Component, For } from 'solid-js'

import { UPGRADES } from '../common/fakeData'
import { Drawer } from './Drawer'
import { UpgradeListItem } from './UpgradeListItem'
// import css from './FarmDrawer.module.scss'

type Props = {
	onClose: () => void
}

export const FarmDrawer: Component<Props> = (props) => {
	return (
		<Drawer onClose={props.onClose}>
			<For each={UPGRADES}>
				{(upgrade) => <UpgradeListItem {...upgrade} />}
			</For>
		</Drawer>
	)
}
