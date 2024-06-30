import WebApp from '@twa-dev/sdk'
import { ParentComponent, Show, createSignal } from 'solid-js'

import { BottomNavigation } from "./BottomNavigation"
import { SettingsDrawer } from './SettingsDrawer'

export const App: ParentComponent = (props) => {
	const [settingsOpen, setSettingsOpen] = createSignal(false)
	const openSettings = () => setSettingsOpen(true)
	const closeSettings = () => setSettingsOpen(false)
	WebApp.SettingsButton.onClick(openSettings).show()
	return (
		<>
			{props.children}
			<BottomNavigation />
			<Show when={settingsOpen()}>
				<SettingsDrawer onClose={closeSettings}/>
			</Show>
		</>
	)
}
