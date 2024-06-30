import WebApp from '@twa-dev/sdk'
import { Component } from 'solid-js'

import { app } from '../common/app'
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
	const handleSecondaryClick = () => {
		const action = data().ui.secondary.action
		const url = data().ui.secondary.url
		if (action === 'COPY')
			return writeToClipboard(url)
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
			<Button class={css.primaryButton}>
				{data().ui.primary.text}
			</Button>
		</Drawer>
	)
}
