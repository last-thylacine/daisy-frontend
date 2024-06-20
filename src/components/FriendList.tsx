import { Component, For } from 'solid-js'

import { app } from '../common/app'
import { FriendListItem } from './FriendListItem'
import css from './FriendList.module.scss'

const t = {
	label: "List of your friends",
}

export const FriendList: Component = () => {
	const { store } = app
	return (
		<>
			<div class={css.label}>{t.label}</div>
			<div class={css.list}>
				<For each={store.friends}>
					{(_friend) => <FriendListItem />}
				</For>
			</div>
		</>
	)
}
