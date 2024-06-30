import { Component } from 'solid-js'

import { Drawer } from './Drawer'
import css from './SettingsDrawer.module.scss'

const t = {
	title: "Settings",
}

type Props = {
	onClose: () => void
}

export const SettingsDrawer: Component<Props> = (props) => {
	return (
		<Drawer onClose={props.onClose}>
			<div class={css.title}>{t.title}</div>
		</Drawer>
	)
}
