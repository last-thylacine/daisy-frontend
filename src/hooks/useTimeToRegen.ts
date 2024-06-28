import { ENERGY } from "../common/ENERGY"
import { app } from "../common/app"

export const useTimeToRegen = () => {
	const { store } = app
	const timeToRegen = () => {
		if (store.energy === null) return ""
		const max_energy = 500 * (1 + store.water_power!)
		const valueToRegen = max_energy - store.energy
		if (valueToRegen <= ENERGY.regeneration) return ""
		// e / (e/s) = s
		const seconds = Math.ceil(valueToRegen / ENERGY.regeneration)
		if (seconds < 60) return `${seconds}s`
		const minutes = Math.ceil(seconds / 60)
		if (minutes < 60) return `${minutes}m`
		const hours = Math.ceil(minutes / 60)
		return `${hours}h`
	}
	return timeToRegen
}
