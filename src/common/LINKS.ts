import { create_tg_invite } from "./create_tg_invite"

const tg_ref = 'https://t.me/BlumCryptoBot/app?startapp=ref_tvX1UKYY9k'

const tg_invite_text = 'Join me on Blum and let\'s earn together! Use my invite link to join the fun. 🌟'

const tg_invite = create_tg_invite(
	tg_ref,
	tg_invite_text,
)

export const LINKS = {
	tg_ref,
	tg_invite,
	tg_channel:
		"https://t.me/tbilisiton",
	tg_chat:
		"https://t.me/ton_breakfast",
	x:
		"https://x.com/elonmusk",
	instagram:
		"https://www.instagram.com/beeple_crap/",
}
