import WebApp from '@twa-dev/sdk'
import { INIT_DATA } from './INIT_DATA'

const SERVER_TLD = 'dirtnmeat.dev'
export const SERVER_URL = `https://${SERVER_TLD}`
export const API_URL = `https://${SERVER_TLD}/api`
export const WS_URL = `ws://${SERVER_TLD}/ws/`

const socket = new WebSocket(WS_URL)

socket.addEventListener("message", (event) => {
	console.log("Message from server ", event.data);
})

const createInitData = () => {
	const { initData } = WebApp
	return initData || INIT_DATA
}

const get = async (path: string) => {
	const response = await fetch(`${API_URL}${path}`)
	const json = await response.json()
	return json
}

const post = async (path: string, body?: any) => {
	const response = await fetch(`${API_URL}${path}`, {
		method: "POST",
		...(body ? { body } : {}),
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
// 		"id": 1,
// 		"tg_id": 1181857472,
// 		"first_name": "there is nothing to do",
// 		"last_name": "",
// 		"username": "abacaba123",
// 		"avatar": "",
// 		"language_code": "",
// 		"allows_write_to_pm": false,
// 		"reg_time": 0,
// 		"last_seen": 0,
// 		"player_id": 1,
// 		"is_premium": false
// 	},
// 	"player": {
// 		"id": 1,
// 		"energy": 1000,
// 		"coins": 0,
// 		"last_updated_time": 0,
// 		"max_energy": 1000,
// 		"energy_level": 0,
// 		"tap_level": 0,
// 		"last_daily_bonus": 0,
// 		"daily_bonus_level": 0
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
			multi_flower:  json.player.tap_level + 1,
			water_power:   json.player.energy_level + 1,
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

const task_getall = async () => {
	let result
	try {
		result = await get('/tasks/')
	} catch (e) {
		ignore(e)
	}
	console.log('task_getall', result)
	return result
}

const dailybonus_use = async () => {
	let result
	try {
		result = await post('/daily-bonus/use')
	} catch (e) {
		ignore(e)
	}
	console.log('dailybonus_use', result)
	return result
}

const friends_getall = async () => {
	let result
	try {
		result = await get('/frens')
	} catch (e) {
		ignore(e)
	}
	console.log('friends_getall', result)
	return result
}

export const api = {
	init,
	task_getall, task_start, task_check, task_claim,
	dailybonus_use,
	upgrade_buy,
	friends_getall,
}
