import { Component, For } from 'solid-js'

import { app } from '../common/app'
import { Button } from './Button'
import { TaskListItem } from './TaskListItem'
import css from './InviteFriends.module.scss'

const t = {
	invite: "Invite friends",
	terms: "Get 10% from your friends + 5% from their referrals + 2.5% from their referrals",
}

export const InviteFriends: Component = () => {
	const { store } = app
	const copy = () => {}
	return (
		<>
			<div class={css.tasks}>
				<For each={store.invite_tasks}>
					{(task) => <TaskListItem {...task} />}
				</For>
			</div>
			<Button onCopyClick={copy}>
				{t.invite}
			</Button>
			<div class={css.terms}>
				{t.terms}
			</div>
		</>
	)
}
