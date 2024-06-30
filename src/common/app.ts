import WebApp from '@twa-dev/sdk'
import { createEffect, createRoot } from "solid-js"
import { createStore } from "solid-js/store"

import { api, initWS } from './api'
import { UPGRADES } from './UPGRADES'
import { TASKS } from './TASKS'
import { INVITE_TASKS } from './INVITE_TASKS'
import { INIT_DATA_UNSAFE } from './INIT_DATA'

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

function createApp() {
	const [store, setStore] = createStore({
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
			vibration: true,
		},
	})
	const tap = () => {
		if (store.coins != null && store.multi_flower != null) {
			setStore("coins", store.coins + store.multi_flower)
		}
	}
	const openSettings = () => setStore('settingsOpen', true)
	const closeSettings = () => setStore('settingsOpen', false)
	createEffect(() => {
		api.init().then(init => {
			setStore(store => ({ ...store, ...init }))
			initWS()
		})
	})
	return {
		store,
		setStore,
		tap,
		openSettings,
		closeSettings,
	}
}

export const app = createRoot(createApp)
