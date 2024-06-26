import { Component } from 'solid-js'

import { app } from '../common/app'
import { Drawer } from './Drawer'
import css from './TaskDrawer.module.scss'
import { Button } from './Button'

type Props = {
	id: string
	onClose: () => void
}

export const TaskDrawer: Component<Props> = (props) => {
	const { store } = app
	const data = () => store.tasks.find(({id}) => id === props.id)!
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
			<Button></Button>
		</Drawer>
	)
}
