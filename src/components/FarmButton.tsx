import { useMatch, useNavigate } from '@solidjs/router'
import { Component, Show } from 'solid-js'

import farmIcon from "../assets/images/farm_48x46.76_3x.png"
import { Column } from './Column'
import { FarmDrawer } from './FarmDrawer'
import { UpgradeDrawer } from './UpgradeDrawer'
import css from './FarmButton.module.scss'

const t = {
	label: "Farm",
}

export const FarmButton: Component = () => {
	const navigate = useNavigate()
	const openDrawer = () => navigate('/grow/farm')
	const farm = useMatch(() => `${import.meta.env.BASE_URL}/grow/farm`)
	const upgrade = useMatch(() => `${import.meta.env.BASE_URL}/grow/farm/:upgrade`)
	return (
		<>
			<Column
				class={css.button}
				onClick={openDrawer}>
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
			<Show when={Boolean(farm())}>
				<FarmDrawer />
			</Show>
			<Show when={Boolean(upgrade())}>
				<UpgradeDrawer id={upgrade()!.params.upgrade!} />
			</Show>
		</>
	)
}
