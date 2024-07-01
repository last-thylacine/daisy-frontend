import { Component } from 'solid-js'

import css from './FriendListItem.module.scss'

type Props = {
	username: string
}

export const FriendListItem: Component<Props> = (props) => {
	return (
		<div class={css.container}>
			{props.username}
		</div>
	)
}
