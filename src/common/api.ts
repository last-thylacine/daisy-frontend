import WebApp from '@twa-dev/sdk'
import { INIT_DATA } from './INIT_DATA'

const API_URL = 'https://dirtnmeat.dev/api'

const createInitData = () => {
	const { initData } = WebApp
	return initData || INIT_DATA
}

// {
// 	"user": {
// 		"id": 5,
// 		"tg_id": 1181857472,
// 		"first_name": "there is nothing to do",
// 		"last_name": "",
// 		"username": "abacaba123",
// 		"avatar": "",
// 		"language_code": "en",
// 		"allows_write_to_pm": true,
// 		"reg_time": 0,
// 		"last_seen": 0,
// 		"player_id": 2
// 	},
// 	"player": {
// 		"id": 2,
// 		"energy": 1000,
// 		"coins": 0,
// 		"last_updated_time": 0,
// 		"max_energy": 1000,
// 		"energy_level": 0,
// 		"tap_level": 0
// 	},
// 	"coins_per_tap": 1
// }

const init = async () => {
	let result
	try {
		const response = await fetch(`${API_URL}/users/init`, {
			method: "POST",
			body: decodeURIComponent(createInitData()),
		})
		const json = await response.json()
		// console.log({ initResponse: json })
		result = {
			// coins_per_tap: json.coins_per_tap,
			coins:         json.player.coins,
			energy:        json.player.energy,
			// max_energy:    json.player.max_energy,
			multi_flower:  json.player.tap_level,
			water_power:   json.player.energy_level,
		}
	} catch (e) {
		console.warn('API error ignored:', e)
		result = {
			// coins_per_tap:      1,
			coins:         340999,
			energy:          1000,
			// max_energy:      1000,
			multi_flower:       1,
			water_power:        1,
		}
	}
	// console.log({ initResult: result })
	return result
}

export const api = { init }
