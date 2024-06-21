import { Component, For } from 'solid-js'

import { app } from '../common/app'
import { ListLabel } from './ListLabel'
import { FriendListItem } from './FriendListItem'
import css from './FriendList.module.scss'

const t = {
	label: "List of your friends",
	empty: "You haven’t invited anyone yet",
}

export const FriendList: Component = () => {
	const { store } = app
	return (
		<>
			<ListLabel>{t.label}</ListLabel>
			<div class={css.list}>
				<For
					each={store.friends}
					fallback={<div class={css.empty}>{t.empty}</div>}>
					{(_friend) => <FriendListItem />}
				</For>
			</div>
		</>
	)
}
