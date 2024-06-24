import { Component, For } from 'solid-js'

import copyIcon from '../assets/images/copy.svg'
import { app } from '../common/app'
import { TaskListItem } from './TaskListItem'
import { Row } from './Row'
import css from './InviteFriends.module.scss'

const t = {
	invite: "Invite friends",
	terms: "Get 10% from your friends + 5% from their referrals + 2.5% from their referrals",
}

export const InviteFriends: Component = () => {
	const { store } = app
	return (
		<>
			<div class={css.tasks}>
				<For each={store.invite_tasks}>
					{(task) => <TaskListItem {...task} />}
				</For>
			</div>
			<Row class={css.buttonRow}>
				<div class={css.primaryButton}>
					{t.invite}
				</div>
				<img
					draggable="false"
					width="50"
					height="50"
					src={copyIcon}
				/>
			</Row>
			<div class={css.terms}>
				{t.terms}
			</div>
		</>
	)
}
