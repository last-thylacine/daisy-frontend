import WebApp from '@twa-dev/sdk'
import { createEffect, createRoot } from "solid-js"
import { createStore } from "solid-js/store"
import { UPGRADES } from './UPGRADES'
import { TASKS } from './TASKS'
import { INVITE_TASKS } from './INVITE_TASKS'

const INITIAL_COIN_BALANCE = 16512372
const INITIAL_COINS_PER_TAP = 14

const createInitData = () => {
	const { initData, initDataUnsafe } = WebApp
	console.log({ WebApp })
	console.log({ initData, initDataUnsafe })
	return initData !== "" ? initDataUnsafe : {
		user: {
			allows_write_to_pm: true,
			first_name: "there is nothing to do",
			id: 1181857472,
			language_code: "en",
			last_name: "",
			username: "abacaba123",
		},
	}
}

function createApp() {
	const [store, setStore] = createStore({
		coins: INITIAL_COIN_BALANCE,
		coins_per_tap: INITIAL_COINS_PER_TAP,
		initData: createInitData(),
		upgrades: UPGRADES,
		tasks: TASKS,
		invite_tasks: INVITE_TASKS,
		friends: [],
	})
	const tap = () => setStore("coins", store.coins + store.coins_per_tap)
	createEffect(() => {
		console.log({...store.initData.user})
	})
	return { store, tap }
}

export const app = createRoot(createApp)
