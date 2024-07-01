import { Component } from 'solid-js'

import { app } from '../common/app'
import { SETTINGS } from '../common/SETTINGS'
import { HapticFeedbackStyle } from '../common/types'
import { Drawer } from './Drawer'
import { Select } from './Select'
import css from './SettingsDrawer.module.scss'

const t = {
	title: "Settings",
}

type Props = {
	onClose: () => void
}

export const SettingsDrawer: Component<Props> = (props) => {
	const { setStore } = app
	return (
		<Drawer onClose={props.onClose}>
			<div class={css.title}>{t.title}</div>
			<Select
				options={SETTINGS.haptic_feedback}
				onChange={(new_value: HapticFeedbackStyle | "") => {
					setStore("settings", "haptic_feedback", new_value || null)
				}}
			/>
		</Drawer>
	)
}
