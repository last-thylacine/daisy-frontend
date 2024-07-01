import WebApp from '@twa-dev/sdk'
import { Component, Match, Switch } from 'solid-js'

import { app } from '../common/app'
import { api } from '../common/api'
import { fmtNumber } from '../common/fmtNumber'
// import { writeToClipboard } from '../common/writeToClipboard'
import coinIcon from '../assets/images/dz_32x32_3x.png'
import { Drawer } from './Drawer'
import { Button } from './Button'
import { Row } from './Row'
import css from './TaskDrawer.module.scss'
import { LINKS } from '../common/LINKS'

const t = {
	check: "Check",
	claim: "Claim",
}

type Props = {
	backend_data: any
	id: string
	onClose: () => void
}

export const TaskDrawer: Component<Props> = (props) => {
	const { store } = app
	const data = () => store.tasks.find(({id}) => id === props.id)!
	// const handlePrimaryClick = () => {
	// 	const action = data().ui.primary.action
	// 	const url = data().ui.primary.url
	// 	if (action === 'CHECK')
	// 		return api.task_check(data().id)
	// 	if (!url) return
	// 	if (typeof url === 'function') {
	// 		return WebApp.openTelegramLink(url(store.initData.user!.id))
	// 	}
	// 	if (url.startsWith('https://t.me/'))
	// 		return WebApp.openTelegramLink(url)
	// 	return WebApp.openLink(url)
	// }
	// const handleSecondaryClick = () => {
	// 	const action = data().ui.secondary.action
	// 	const url = data().ui.secondary.url
	// 	if (action === 'COPY')
	// 		return (typeof url === 'function')
	// 			? writeToClipboard(url(store.initData.user!.id))
	// 			: writeToClipboard(url)
	// 	if (!url) return
	// 	if (typeof url === 'function') {
	// 		return WebApp.openTelegramLink(url(store.initData.user!.id))
	// 	}
	// 	if (url.startsWith('https://t.me/'))
	// 		return WebApp.openTelegramLink(url)
	// 	return WebApp.openLink(url)
	// }
	const action = async () => {
		await api.task_start(data().server_id)
		switch (data().id) {
			case "tg_channel": {
				WebApp.openTelegramLink(LINKS.tg_channel)
				break;
			}
			case "tg_chat": {
				WebApp.openTelegramLink(LINKS.tg_chat)
				break;
			}
			case "x": {
				WebApp.openLink(LINKS.x)
				break;
			}
			case "instagram": {
				WebApp.openLink(LINKS.instagram)
				break;
			}
			case "invite_3_friends": {
				WebApp.openLink(LINKS.tg_invite(store.initData.user!.id))
				break;
			}
			default: {
				break;
			}
		}
	}
	const check = async () => {
		await api.task_check(data().server_id)
		await api.task_claim(data().server_id)
	}
	const backend_task = () => {
		if (!props.backend_data()) return
		const t = props.backend_data()[data().server_id]
		console.log({ t, key: data().server_id, data: props.backend_data() })
		return t
	}
	return (
		<Drawer onClose={props.onClose}>
			<img
				draggable="false"
				width="80"
				height="80"
				src={data().icon}
			/>
			<div class={css.title}>
				{data().title}
			</div>
			<Row>
				<img
					draggable="false"
					width="32"
					height="32"
					src={coinIcon}
				/>
				<div class={css.reward}>
					{`+${fmtNumber(data().reward)}`}
				</div>
				<div
					class={css.actionButton}
					onClick={action}>
					{data().ui.primary.text}
				</div>
			</Row>
			<Switch>
				<Match when={backend_task()?.is_done}>
					<Button
						disabled
						class={css.submitButton}>
						{t.check}
					</Button>
				</Match>
				<Match when={backend_task()?.started_time !== 0}>
					<Button
						class={css.submitButton}
						onClick={check}>
						{t.check}
					</Button>
				</Match>
				<Match when={backend_task()?.started_time === 0}>
					<Button
						disabled
						class={css.submitButton}
						onClick={check}>
						{t.check}
					</Button>
				</Match>
			</Switch>
		</Drawer>
	)
}
