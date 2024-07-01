import tgIcon from "../assets/images/task_tg_40x40_3x.png"
import igIcon from "../assets/images/task_ig_40x40_3x.png"
import xIcon from "../assets/images/task_x_40x40_3x.png"
import friendsIcon from "../assets/images/task_friends_40x40_3x.png"
// import { LINKS } from "./LINKS"

export const TASKS = [
	{
		server_id: 1,
		id: "tg_channel",
		icon: tgIcon,
		title: "Join our TG channel",
		reward: 100000,
		ui: {
			primary: {
				text: "Join",
				// action: "JOIN_TG_CHANNEL"
				// url: LINKS.tg_channel,
			},
			primary_final: {
				text: "Open TG channel",
				// action: "JOIN_TG_CHANNEL"
				// url: LINKS.tg_channel,
			}
		},
	},
	{
		server_id: 2,
		id: "tg_chat",
		icon: tgIcon,
		title: "Join our TG chat",
		reward: 5000,
		ui: {
			primary: {
				text: "Join",
				// url: LINKS.tg_chat,
			},
			primary_final: {
				text: "Open TG chat",
				// url: LINKS.tg_chat,
			}
		},
	},
	{
		server_id: 3,
		id: "x",
		icon: xIcon,
		title: "Follow our X account",
		reward: 5000,
		ui: {
			primary: {
				text: "Follow",
				// url: LINKS.x,
			},
			primary_final: {
				text: "Open X account",
				// url: LINKS.x,
			}
		},
	},
	{
		server_id: 4,
		id: "instagram",
		icon: igIcon,
		title: "Follow our Instagram",
		reward: 5000,
		ui: {
			primary: {
				text: "Follow",
				// url: LINKS.instagram,
			},
			primary_final: {
				text: "Open Instagram account",
				// url: LINKS.instagram,
			}
		},
	},
	{
		server_id: 5,
		id: "invite_3_friends",
		icon: friendsIcon,
		title: "Invite 3 friends",
		reward: 100000,
		ui: {
			primary: {
				text: "Invite",
				// text: "Invite friends",
				// url: LINKS.tg_invite,
			},
			secondary: {
				icon: "COPY",
				// url: LINKS.tg_ref,
				// action: "COPY",
			},
			primary_final: {
				icon: "COPY",
				text: "Invite more friends",
				// url: LINKS.tg_ref,
			}
		},
	},
]
