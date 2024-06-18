import { createRoot } from "solid-js"
import { createStore } from "solid-js/store"

const INITIAL_COIN_BALANCE = 729501
const INITIAL_COINS_PER_CLICK = 10

function createApp() {
	const [store, setStore] = createStore({
		coins: INITIAL_COIN_BALANCE,
		coins_per_click: INITIAL_COINS_PER_CLICK,
	})
	const tap = () => setStore("coins", store.coins + store.coins_per_click)
	return { store, tap }
}

export const app = createRoot(createApp)
