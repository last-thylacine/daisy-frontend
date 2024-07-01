import WebApp from '@twa-dev/sdk'
import { INIT_DATA } from './INIT_DATA'

const SERVER_TLD = 'dirtnmeat.dev'
export const SERVER_URL = `https://${SERVER_TLD}`
export const API_URL = `/api`
export const WS_URL = `wss://${SERVER_TLD}/ws/`

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

// ###########################################
// #                   API                   #
// ###########################################

const init = async () => {
	let result
	try {
		const json = await post_uri('/users/init', createInitData())
		result = {
			coins:             json.player.coins,
			energy:            json.player.energy,
			multi_flower:      json.player.tap_level + 1,
			water_power:       json.player.energy_level + 1,
			last_daily_bonus:  json.player.last_daily_bonus,
			daily_bonus_level: json.player.daily_bonus_level,
		}
	} catch (e) {
		ignore(e)
		result = {
			coins:         340999,
			energy:          1000,
			multi_flower:       1,
			water_power:        1,
			last_daily_bonus:   0,
			daily_bonus_level:  0,
		}
	}
	console.log('init', result)
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

const task_start = async (task_id: number) => {
	let result
	try {
		result = await post('/tasks/start', { task_id })
	} catch (e) {
		ignore(e)
	}
	console.log('task_start', result)
	return result
}

const task_check = async (task_id: number) => {
	let result
	try {
		result = await post('/tasks/check', { task_id })
	} catch (e) {
		ignore(e)
	}
	console.log('task_check', result)
	return result
}

const task_claim = async (task_id: number) => {
	let result
	try {
		result = await post('/tasks/claim', { task_id })
	} catch (e) {
		ignore(e)
	}
	console.log('task_claim', result)
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

const upgrade_buy = async (upgrade_id: number, upgrade_to_level: number) => {
	let result
	try {
		result = await post('/upgrades/buy', { upgrade_id, upgrade_to_level })
	} catch (e) {
		ignore(e)
	}
	console.log('upgrade_buy', result)
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

const dev_reset = async () => {
	let result
	try {
		result = await post('/dev/delete-me')
	} catch (e) {
		ignore(e)
	}
	console.log('dev_reset', result)
	return result
}

const dev_getrich = async () => {
	let result
	try {
		result = await post('/dev/set-coins', 10_000_000)
	} catch (e) {
		ignore(e)
	}
	console.log('dev_getrich', result)
	return result
}

export const api = {
	init,
	task_getall, task_start, task_check, task_claim,
	dailybonus_use,
	upgrade_buy,
	friends_getall,
	dev_reset, dev_getrich,
}
