import { createEffect, createRoot } from "solid-js"
import { createStore } from "solid-js/store"

function formatNumber(num: number) {
    const parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

const INITIAL_COIN_BALANCE = 729501

function createApp() {
	const [store, setStore] = createStore({
		coins: INITIAL_COIN_BALANCE,
		coins_fmt: formatNumber(INITIAL_COIN_BALANCE),
	})
	createEffect(() => setStore("coins_fmt", formatNumber(store.coins)))
	const tap = () => setStore("coins", (currentCoins) => currentCoins + 1)
	return { store, tap }
}

export const app = createRoot(createApp)
