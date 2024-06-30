import WebApp from '@twa-dev/sdk'
import { ParentComponent, Show } from 'solid-js'

import { app } from '../common/app'
import { BottomNavigation } from "./BottomNavigation"
import { SettingsDrawer } from './SettingsDrawer'

export const App: ParentComponent = (props) => {
	const { store, openSettings, closeSettings } = app
	WebApp.SettingsButton.onClick(openSettings).show()
	return (
		<>
			{props.children}
			<BottomNavigation />
			<Show when={store.settingsOpen}>
				<SettingsDrawer onClose={closeSettings}/>
			</Show>
		</>
	)
}
