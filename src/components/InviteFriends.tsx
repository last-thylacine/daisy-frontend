import { Component, For } from 'solid-js'

import { app } from '../common/app'
import { TaskListItem } from './TaskListItem'
import css from './InviteFriends.module.scss'

export const InviteFriends: Component = () => {
	const { store } = app
	return (
		<>
			<div class={css.tasks}>
				<For each={store.invite_tasks}>
					{(task) => <TaskListItem {...task} />}
				</For>
			</div>
		</>
	)
}
