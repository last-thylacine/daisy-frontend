import { Component, For, createEffect, createResource } from 'solid-js'

// import { app } from '../common/app'
import { api } from '../common/api'
import { ListLabel } from './ListLabel'
import { FriendListItem } from './FriendListItem'
import css from './FriendList.module.scss'

const t = {
	label: "List of your friends",
	empty: "You haven’t invited anyone yet",
}

export const FriendList: Component = () => {
	// const { store } = app
	// const [data, { mutate, refetch }] = createResource(() => api.friends_getall())
	const [data] = createResource(() => api.friends_getall())
	const refresh = () => {}
	createEffect(() => {
		console.log(data())
	})
	return (
		<>
			<ListLabel refresh={refresh}>{t.label}</ListLabel>
			<div class={css.list}>
				<For
					each={data()}
					fallback={<div class={css.empty}>{t.empty}</div>}>
					{(friend) => <FriendListItem username={friend.username} />}
				</For>
			</div>
		</>
	)
}
