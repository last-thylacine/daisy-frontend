export const create_tg_invite = (url: string, text: string) => {
	const u = encodeURIComponent(url)
	const t = encodeURIComponent(text)
	return `https://t.me/share/url?url=${u}&text=${t}`
}
