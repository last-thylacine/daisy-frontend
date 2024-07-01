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
import { HapticFeedbackStyle } from './types'

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
			store.energy != null &&
			store.coins != null &&
			store.multi_flower != null
		) {
			const resulting_balance = store.coins + store.multi_flower
			const resulting_energy = store.energy - store.multi_flower
			if (resulting_energy >= 0) {
				setStore(
					produce((state) => {
						state.coins = resulting_balance
						state.energy = resulting_energy
					})
				)
				ws.tap()
			}
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
	const update = (coins: number, energy: number) => {
		setStore(
			produce((state) => {
				state.coins = coins
				state.energy = energy
			})
		)
	}
	return {
		store,
		setStore,
		tap,
		update,
		openSettings,
		closeSettings,
	}
}

export const app = createRoot(createApp)
