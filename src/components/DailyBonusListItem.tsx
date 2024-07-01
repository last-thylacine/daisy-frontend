import { Component, Match, Switch } from 'solid-js'

import { app } from '../common/app'
import { DAILY_BONUS } from '../common/DAILY_BONUS'
import coinIcon from '../assets/images/dz_32x32_3x.png'
import checkIcon from '../assets/images/check_24.svg'
import { Column } from './Column'
import css from './DailyBonusListItem.module.scss'

const calculateStatus = (i: number): ItemStatus => {
	const { store } = app
	const daily_bonus_level = store.daily_bonus_level!
	if (daily_bonus_level > i) return 'CLAIMED'
	if (daily_bonus_level === i) return 'UNCLAIMED'
	return 'INACTIVE'
}

const t = {
	day: "Day",
}

type ItemStatus = 'CLAIMED' | 'UNCLAIMED' | 'INACTIVE'

type Props = {
	i: number
}

export const DailyBonusListItem: Component<Props> = (props) => {
	const data = () => DAILY_BONUS.rewards[props.i]
	const status = () => calculateStatus(props.i)
	return (
		<Column
			classList={{
				[css.item]: true,
				[css.claimed]: status() === 'CLAIMED',
				[css.unclaimed]: status() === 'UNCLAIMED',
				[css.inactive]: status() === 'INACTIVE',
			}}>
			<div class={css.day}>{t.day} {props.i + 1}</div>
			<img
				draggable="false"
				width="32"
				height="32"
				src={coinIcon}
			/>
			<div class={css.reward}>
				<Switch>
					<Match when={status() === 'CLAIMED'}>
						<img
							draggable="false"
							width="24"
							height="26"
							src={checkIcon}
						/>
					</Match>
					<Match when={status() !== 'CLAIMED'}>
						{data().reward_fmt}
					</Match>
				</Switch>
			</div>
		</Column>
	)
}
