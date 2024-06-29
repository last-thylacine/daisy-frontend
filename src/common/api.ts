import WebApp from '@twa-dev/sdk'
import { INIT_DATA } from './INIT_DATA'

export const SERVER_URL = 'https://dirtnmeat.dev'
const API_URL = `${SERVER_URL}/api`

const createInitData = () => {
	const { initData } = WebApp
	return initData || INIT_DATA
}

// const get = async (path: string) => {
// 	const response = await fetch(`${API_URL}${path}`)
// 	const json = await response.json()
// 	return json
// }

const post = async (path: string, body: any) => {
	const response = await fetch(`${API_URL}${path}`, {
		method: "POST",
		body: JSON.stringify(body),
	})
	const json = await response.json()
	return json
}

const post_uri = async (path: string, body: string) => {
	const response = await fetch(`${API_URL}${path}`, {
		method: "POST",
		body: decodeURIComponent(body),
	})
	const json = await response.json()
	return json
}

const ignore = (e: any) => console.warn('API error ignored:', e)

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
		const json = await post_uri('/users/init', createInitData())
		result = {
			coins:         json.player.coins,
			energy:        json.player.energy,
			multi_flower:  json.player.tap_level,
			water_power:   json.player.energy_level,
		}
	} catch (e) {
		ignore(e)
		result = {
			coins:         340999,
			energy:          1000,
			multi_flower:       1,
			water_power:        1,
		}
	}
	console.log('init', result)
	return result
}

const task_start = async (task_id: string) => {
	let result
	try {
		result = await post('/tasks/start', { task_id })
	} catch (e) {
		ignore(e)
	}
	console.log('task_start', result)
	return result
}

const task_check = async (task_id: string) => {
	let result
	try {
		result = await post('/tasks/check', { task_id })
	} catch (e) {
		ignore(e)
	}
	console.log('task_check', result)
	return result
}

const task_claim = async (task_id: string) => {
	let result
	try {
		result = await post('/tasks/claim', { task_id })
	} catch (e) {
		ignore(e)
	}
	console.log('task_claim', result)
	return result
}

const upgrade_buy = async (upgrade_id: string, upgrade_to_level: number) => {
	let result
	try {
		result = await post('/upgrades/buy', { upgrade_id, upgrade_to_level })
	} catch (e) {
		ignore(e)
	}
	console.log('upgrade_buy', result)
	return result
}

export const api = {
	init,
	task_start, task_check, task_claim,
	upgrade_buy,
}
