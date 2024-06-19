import { Component, For, createSignal } from 'solid-js'

import { UPGRADES } from '../common/fakeData'
import farmIcon from "../assets/farm_48x46.76_3x.png"
import { Column } from './Column'
import { Drawer } from './Drawer'
import { UpgradeListItem } from './UpgradeListItem'
import css from './FarmButton.module.scss'

const t = {
	label: "Farm",
}

export const FarmButton: Component = () => {
	const [active, setActive] = createSignal(false)
	const handleClick = () => setActive(true)
	return (
		<>
			<Column
				class={css.button}
				onClick={handleClick}>
				<img
					width="48"
					height="46.76"
					src={farmIcon}
				/>
				<div class={css.label}>
					{t.label}
				</div>
			</Column>
			{active() && (
				<Drawer>
					<For each={UPGRADES}>
						{(upgrade) => <UpgradeListItem {...upgrade} />}
					</For>
				</Drawer>
			)}
		</>
	)
}
