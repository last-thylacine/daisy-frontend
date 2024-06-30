import { WS_URL } from "./api"

let socket: WebSocket

const init = () => {
	console.log('ws.init')
	try {
		socket = new WebSocket(WS_URL)
	
		socket.addEventListener("message", (event) => {
			console.log("Message from server ", event.data);
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
