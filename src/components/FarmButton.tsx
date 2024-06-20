import { Component, createSignal } from 'solid-js'

import farmIcon from "../assets/farm_48x46.76_3x.png"
import { Column } from './Column'
import { FarmDrawer } from './FarmDrawer'
import css from './FarmButton.module.scss'

const t = {
	label: "Farm",
}

export const FarmButton: Component = () => {
	const [active, setActive] = createSignal(false)
	return (
		<>
			<Column
				class={css.button}
				onClick={() => setActive(true)}>
				<img
					draggable="false"
					width="48"
					height="46.76"
					src={farmIcon}
				/>
				<div class={css.label}>
					{t.label}
				</div>
			</Column>
			{active() && <FarmDrawer onClose={() => setActive(false)} />}
		</>
	)
}
