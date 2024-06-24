import WebApp from '@twa-dev/sdk'
import { createEffect, createRoot } from "solid-js"
import { createStore } from "solid-js/store"

import { UPGRADES } from './UPGRADES'
import { TASKS } from './TASKS'
import { INVITE_TASKS } from './INVITE_TASKS'
import { INIT_DATA_UNSAFE } from './INIT_DATA'
import { api } from './api'

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
		coins_per_tap: null as number | null,
		energy: null as number | null,
		max_energy: null as number | null,
		energy_level: null as number | null,
		tap_level: null as number | null,
		initData: createInitData(),
		upgrades: UPGRADES,
		tasks: TASKS,
		invite_tasks: INVITE_TASKS,
		friends: [],
	})
	const tap = () => {
		if (store.coins != null && store.coins_per_tap != null) {
			setStore("coins", store.coins + store.coins_per_tap)
		}
	}
	createEffect(() => {
		api.init().then(init => setStore(store => ({ ...store, ...init })))
	})
	return { store, tap }
}

export const app = createRoot(createApp)
