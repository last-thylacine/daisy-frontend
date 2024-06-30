import tgIcon from "../assets/images/task_tg_40x40_3x.png"
import igIcon from "../assets/images/task_ig_40x40_3x.png"
import xIcon from "../assets/images/task_x_40x40_3x.png"
import friendsIcon from "../assets/images/task_friends_40x40_3x.png"

export const TASKS = [
	{
		id: "tg_channel",
		icon: tgIcon,
		title: "Join our TG channel",
		reward: 100000,
		ui: {
			primary: {
				text: "Check",
				action: "CHECK",
			},
			secondary: {
				text: "Join",
				url: "https://t.me/tbilisiton",
			},
			primary_final: {
				text: "Open TG channel",
				url: "https://t.me/tbilisiton",
			}
		},
	},
	{
		id: "tg_chat",
		icon: tgIcon,
		title: "Join our TG chat",
		reward: 5000,
		ui: {
			primary: {
				text: "Check",
				action: "CHECK",
			},
			secondary: {
				text: "Join",
				url: "https://t.me/ton_breakfast",
			},
			primary_final: {
				text: "Open TG chat",
				url: "https://t.me/ton_breakfast",
			}
		},
	},
	{
		id: "x",
		icon: xIcon,
		title: "Follow our X account",
		reward: 5000,
		ui: {
			primary: {
				text: "Check",
				action: "CHECK",
			},
			secondary: {
				text: "Follow",
				url: "https://x.com/elonmusk",
			},
			primary_final: {
				text: "Open X account",
				url: "https://x.com/elonmusk",
			}
		},
	},
	{
		id: "instagram",
		icon: igIcon,
		title: "Follow our Instagram",
		reward: 5000,
		ui: {
			primary: {
				text: "Check",
				action: "CHECK",
			},
			secondary: {
				text: "Follow",
				url: "https://www.instagram.com/beeple_crap/",
			},
			primary_final: {
				text: "Open Instagram account",
				url: "https://www.instagram.com/beeple_crap/",
			}
		},
	},
	{
		id: "invite_3_friends",
		icon: friendsIcon,
		title: "Invite 3 friends",
		reward: 100000,
		ui: {
			primary: {
				text: "Invite friends",
				action: "INVITE",
			},
			secondary: {
				icon: "COPY",
				action: "COPY",
				// url: "copy://",
				url: "https://t.me/abacaba123",
			},
			primary_final: {
				text: "Invite more friends",
				url: "https://t.me/abacaba123",
				icon: "COPY",
			}
		},
	},
]
