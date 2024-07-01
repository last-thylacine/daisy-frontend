import WebApp from '@twa-dev/sdk'
import semver from 'semver'
import { Component } from 'solid-js'

import { version } from '../../package.json'
import {
	HapticFeedbackImpactStyle,
	HapticFeedbackNotificationType,
	IMPACT_STYLES,
	NOTIFICATION_TYPES,
} from '../common/HAPTIC_FEEDBACK'
import { app } from '../common/app'
import { api } from '../common/api'
import { includes } from '../common/includes'
import { SETTINGS } from '../common/SETTINGS'
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
				onChange={(new_value: HapticFeedbackImpactStyle | HapticFeedbackNotificationType | "") => {
					setStore("settings", "haptic_feedback", new_value || null)
					if (includes(IMPACT_STYLES, new_value))
						WebApp.HapticFeedback.impactOccurred(new_value)
					if (includes(NOTIFICATION_TYPES, new_value))
						WebApp.HapticFeedback.notificationOccurred(new_value)
				}}
			/>
			<div>{semver.inc(version, 'patch')}</div>
			<button onClick={api.dev_reset}>[DEV] reset</button>
			<button onClick={api.dev_getrich}>[DEV] get rich</button>
		</Drawer>
	)
}
