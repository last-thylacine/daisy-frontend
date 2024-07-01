import { WS_URL } from "./api"
import { app } from "./app"

let socket: WebSocket

const init = () => {
	console.log('ws.init')
	try {
		socket = new WebSocket(WS_URL)
		// {"type":"player_update","Energy":998,"MaxEnergy":1000,"Coins":46431,"Coins_per_tap":1,"Timestamp":1719820804748}	1719820804.7784278
		socket.addEventListener("message", (event) => {
			console.log({ ws: event.data });
			const data = JSON.parse(event.data)
			if (data.type === "player_update") {
				app.update(data.Coins, data.Energy)
			}
		})
	} catch (e) {
		console.error('Error initializing WebSocket: ', e)
	}
}

const tap = () => {
	console.log('ws.tap')
	if (!socket) return
	
	const msg = JSON.stringify({
		'type_': "tap",
		'payload': JSON.stringify({
			taps: [
				{
					x: 50,
					y: 50,
					time: Date.now(),
					ms: 20 + Math.round(30*Math.random()),
				},
			],
		}),
	})

	socket.send(msg)
}

export const ws = {
	init,
	tap,
}
