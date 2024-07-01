import WebApp from '@twa-dev/sdk'
import { createEffect, createRoot } from "solid-js"
import { createStore, produce } from "solid-js/store"

import { api } from './api'
import { ws } from './ws'
import { UPGRADES } from './UPGRADES'
import { TASKS } from './TASKS'
import { INVITE_TASKS } from './INVITE_TASKS'
import { INIT_DATA_UNSAFE } from './INIT_DATA'
import { ENERGY } from './ENERGY'

const createInitData = () => {
	const { initData, initDataUnsafe } = WebApp
	return initData !== "" ? initDataUnsafe : INIT_DATA_UNSAFE
}

// // controlled by client
// coins_delta: 0,

// // controlled by server
// coins: null as number | null,

// // derived value
// // coins_display = coins + coins_delta
// coins_display: null as number | null,

type HapticFeedbackStyle = "light" | "medium" | "heavy" | "rigid" | "soft"

function createApp() {
	const [store, setStore] = createStore({
		initialized: false,
		coins: null as number | null,
		// coins_per_tap: null as number | null,
		energy: null as number | null,
		// max_energy: null as number | null,
		multi_flower: null as number | null,
		water_power: null as number | null,
		initData: createInitData(),
		upgrades: UPGRADES,
		tasks: TASKS,
		invite_tasks: INVITE_TASKS,
		friends: [],
		settingsOpen: false,
		settings: {
			lang: 'en',
			haptic_feedback: 'light' as HapticFeedbackStyle | null
		},
	})
	const tap = () => {
		if (
			store.coins != null &&
			store.multi_flower != null
		) {
			setStore(
				produce((state) => {
					state.coins = state.coins! + state.multi_flower!
					state.energy = state.energy! - state.multi_flower!
				})
			)
			ws.tap()
		}
	}
	const openSettings = () => setStore('settingsOpen', true)
	const closeSettings = () => setStore('settingsOpen', false)
	createEffect(() => {
		api.init().then(init => {
			setStore(store => ({
				...store,
				...init,
				initialized: true,
			}))
			ws.init()
		})
	})
	const regen = () => {
		if (store.energy !== null && store.water_power !== null) {
			setStore(
				produce((state) => {
					state.energy = Math.min(state.energy! + ENERGY.regeneration, 500 * (1 + store.water_power!))
				})
			)
		}
	}
	setInterval(regen, 1000)
	return {
		store,
		setStore,
		tap,
		openSettings,
		closeSettings,
	}
}

export const app = createRoot(createApp)
