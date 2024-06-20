const API_URL = 'https://e97ebf99a4d64e.lhr.life/api'

const init = async (initData: string) => {
	const response = await fetch(`${API_URL}/users/init`, {
		method: "POST",
		body: initData,
	})
	return response.json()
}

export const api = { init }
