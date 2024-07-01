import { useMatch, useNavigate } from '@solidjs/router'
import { Component, For, Show, createEffect, createResource } from 'solid-js'

import { api } from '../common/api'
import { TASKS } from '../common/TASKS'
import { ListLabel } from './ListLabel'
import { TaskDrawer } from './TaskDrawer'
import { TaskListItem } from './TaskListItem'
import css from './TaskList.module.scss'

const t = {
	label: "Tasks list",
}

export const TaskList: Component = () => {
	const [backend_data] = createResource(() => api.task_getall())
	createEffect(() => {
		console.log(backend_data())
	})
	const navigate = useNavigate()
	const openTask = (id?: string) => {
		if (id) navigate(`/earn/task/${id}`, { scroll: false })
		else navigate('/earn', { scroll: false })
	}
	const task = useMatch(() => `${import.meta.env.BASE_URL}/earn/task/:task_id`)
	return (
		<>
			<ListLabel>{t.label}</ListLabel>
			<div class={css.grid}>
				<For each={TASKS}>
					{(task) => (
						<TaskListItem
							id={task.id}
							onClick={[openTask, task.id]}
						/>
					)}
				</For>
			</div>
			<Show when={Boolean(task())}>
				<TaskDrawer
					id={task()!.params.task_id}
					onClose={openTask}
					backend_data={backend_data}
				/>
			</Show>
		</>
	)
}
