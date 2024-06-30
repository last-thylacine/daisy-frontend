import WebApp from '@twa-dev/sdk'
import { Component } from 'solid-js'

import { LINKS } from '../common/LINKS'
import { writeToClipboard } from '../common/writeToClipboard'
import { Button } from './Button'
import { InviteTaskListItem } from './InviteTaskListItem'
import css from './InviteFriends.module.scss'

const t = {
	invite: "Invite friends",
	terms: "Get 10% from your friends + 5% from their referrals + 2.5% from their referrals",
}

export const InviteFriends: Component = () => {
	const invite = () => {
		WebApp.openTelegramLink(LINKS.tg_invite)
	}
	const copy = () => {
		writeToClipboard(LINKS.tg_ref)
	}
	return (
		<>
			<div class={css.tasks}>
				<InviteTaskListItem id="0" />
				<InviteTaskListItem id="1" />
			</div>
			<Button
				onClick={invite}
				onCopyClick={copy}>
				{t.invite}
			</Button>
			<div class={css.terms}>
				{t.terms}
			</div>
		</>
	)
}
