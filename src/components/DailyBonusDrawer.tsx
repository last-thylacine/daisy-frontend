import { Component, For } from 'solid-js'

import { DAILY_BONUS } from '../common/DAILY_BONUS'
import giftIcon from '../assets/images/gift.svg'
import { Button } from './Button'
import { DailyBonusListItem } from './DailyBonusListItem'
import { Drawer } from './Drawer'
import css from './DailyBonusDrawer.module.scss'

const t = {
	title: "Daily Bonus",
	subtitle: "Get coins for logging into the game daily without skipping. Tap “Get Daily Bonus” every day",
	tomorrow: "Come back tomorrow",
}

type Props = {
	onClose: () => void
}

export const DailyBonusDrawer: Component<Props> = (props) => {
	return (
		<Drawer onClose={props.onClose}>
			<img
				draggable="false"
				width="80"
				height="80"
				src={giftIcon}
			/>
			<div class={css.title}>
				{t.title}
			</div>
			<div class={css.subtitle}>
				{t.subtitle}
			</div>
			<div class={css.grid}>
				<For each={DAILY_BONUS.rewards}>
					{(_daily_bonus, i) => (
						<DailyBonusListItem i={i()} />
					)}
				</For>
			</div>
			<Button disabled>{t.tomorrow}</Button>
		</Drawer>
	)
}
