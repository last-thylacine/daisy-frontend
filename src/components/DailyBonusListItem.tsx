import { Component } from 'solid-js'

import { DAILY_BONUS } from '../common/DAILY_BONUS'
import coinIcon from '../assets/images/dz_32x32_3x.png'
import { Column } from './Column'
import css from './DailyBonusListItem.module.scss'

const calculateStatus = (i: number): ItemStatus => {
	const { current_phase } = DAILY_BONUS
	if (current_phase > i) return 'CLAIMED'
	if (current_phase === i) return 'UNCLAIMED'
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
			<div class={css.reward}>{data().reward_fmt}</div>
		</Column>
	)
}
