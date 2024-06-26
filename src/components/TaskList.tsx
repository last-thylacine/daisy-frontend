import { useMatch, useNavigate } from '@solidjs/router'
import { Component, For, Show } from 'solid-js'

import { app } from '../common/app'
import { ListLabel } from './ListLabel'
import { TaskDrawer } from './TaskDrawer'
import { TaskListItem } from './TaskListItem'
import css from './TaskList.module.scss'

const t = {
	label: "Tasks list",
}

export const TaskList: Component = () => {
	const { store } = app
	const navigate = useNavigate()
	const openTask = (id?: string) => {
		if (id) navigate(`/earn/task/${id}`)
		else navigate('/earn')
	}
	const task = useMatch(() => `${import.meta.env.BASE_URL}/earn/task/:task_id`)
	return (
		<>
			<ListLabel>{t.label}</ListLabel>
			<div class={css.grid}>
				<For each={store.tasks}>
					{(task) => (
						<TaskListItem
							{...task}
							onClick={[openTask, task.id]}
						/>
					)}
				</For>
			</div>
			<Show when={Boolean(task())}>
				<TaskDrawer
					id={task()!.params.task_id!}
					onClose={openTask}
				/>
			</Show>
		</>
	)
}
