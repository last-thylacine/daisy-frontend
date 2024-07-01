import WebApp from '@twa-dev/sdk'
import { Component } from 'solid-js'

import { app } from '../common/app'
import { api } from '../common/api'
import { fmtNumber } from '../common/fmtNumber'
import { writeToClipboard } from '../common/writeToClipboard'
import coinIcon from '../assets/images/dz_32x32_3x.png'
import { Drawer } from './Drawer'
import { Button } from './Button'
import { Row } from './Row'
import css from './TaskDrawer.module.scss'

type Props = {
	id: string
	onClose: () => void
}

export const TaskDrawer: Component<Props> = (props) => {
	const { store } = app
	const data = () => store.tasks.find(({id}) => id === props.id)!
	const handlePrimaryClick = () => {
		const action = data().ui.primary.action
		const url = data().ui.primary.url
		if (action === 'CHECK')
			return api.task_check(data().id)
		if (!url) return
		if (typeof url === 'function') {
			return WebApp.openTelegramLink(url(store.initData.user!.id))
		}
		// if (url.startsWith('https://t.me/'))
		// 	return WebApp.openTelegramLink(url)
		// return WebApp.openLink(url)
	}
	const handleSecondaryClick = () => {
		const action = data().ui.secondary.action
		const url = data().ui.secondary.url
		if (action === 'COPY')
			return (typeof url === 'function')
				? writeToClipboard(url(store.initData.user!.id))
				: writeToClipboard(url)
		if (!url) return
		if (typeof url === 'function') {
			return WebApp.openTelegramLink(url(store.initData.user!.id))
		}
		if (url.startsWith('https://t.me/'))
			return WebApp.openTelegramLink(url)
		return WebApp.openLink(url)
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
					class={css.secondaryButton}
					onClick={handleSecondaryClick}>
					{data().ui.secondary.text}
				</div>
			</Row>
			<Button
				class={css.primaryButton}
				onClick={handlePrimaryClick}>
				{data().ui.primary.text}
			</Button>
		</Drawer>
	)
}
