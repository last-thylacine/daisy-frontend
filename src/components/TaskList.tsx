import { Component, For } from 'solid-js'

import { app } from '../common/app'
import { ListLabel } from './ListLabel'
import { TaskListItem } from './TaskListItem'
import css from './TaskList.module.scss'

const t = {
	label: "Tasks list",
}

export const TaskList: Component = () => {
	const { store } = app
	return (
		<>
			<ListLabel>{t.label}</ListLabel>
			<div class={css.grid}>
				<For each={store.tasks}>
					{(task) => <TaskListItem {...task} />}
				</For>
			</div>
		</>
	)
}
