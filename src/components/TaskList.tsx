import { Component, For } from 'solid-js'

import { TASKS } from '../common/TASKS'
import { TaskListItem } from './TaskListItem'
import css from './TaskList.module.scss'

const t = {
	label: "Tasks list",
}

export const TaskList: Component = () => {
	return (
		<>
			<div class={css.label}>{t.label}</div>
			<div class={css.grid}>
				<For each={TASKS}>
					{(task) => <TaskListItem {...task} />}
				</For>
			</div>
		</>
	)
}
