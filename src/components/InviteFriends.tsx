import { Component } from 'solid-js'

import { Button } from './Button'
import { InviteTaskListItem } from './InviteTaskListItem'
import css from './InviteFriends.module.scss'

const t = {
	invite: "Invite friends",
	terms: "Get 10% from your friends + 5% from their referrals + 2.5% from their referrals",
}

export const InviteFriends: Component = () => {
	const copy = () => {}
	return (
		<>
			<div class={css.tasks}>
				<InviteTaskListItem id="0" />
				<InviteTaskListItem id="1" />
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
