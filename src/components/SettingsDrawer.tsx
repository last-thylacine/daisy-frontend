import semver from 'semver'
import { Component } from 'solid-js'

import { version } from '../../package.json'
import { app } from '../common/app'
import { api } from '../common/api'
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
	const { store, setStore } = app
	return (
		<Drawer onClose={props.onClose}>
			<div class={css.title}>{t.title}</div>
			<Select
				value={store.settings.haptic_feedback ?? ''}
				options={SETTINGS.haptic_feedback}
				onChange={(new_value: HapticFeedbackStyle | "") => {
					setStore("settings", "haptic_feedback", new_value || null)
				}}
			/>
			<div>{semver.inc(version, 'patch')}</div>
			<button onClick={api.dev_reset}>[DEV] reset</button>
			<button onClick={api.dev_getrich}>[DEV] get rich</button>
		</Drawer>
	)
}
