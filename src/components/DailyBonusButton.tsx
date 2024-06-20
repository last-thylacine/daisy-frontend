import { Component } from 'solid-js'

import { fmtNumber } from '../common/fmtNumber'
import chevronRightIcon from "../assets/chevron_right_24.svg"
import dzIcon from "../assets/dz_24x24_3x.png"
import giftIcon from "../assets/gift.svg"
import { Row } from './Row'
import css from './DailyBonusButton.module.scss'

const t = {
	'title': "Daily Bonus",
}

type Props = {
	value: number
}

export const DailyBonusButton: Component<Props> = (props) => {
	return (
		<Row class={css.container}>
			<img
				width="40"
				height="40"
				src={giftIcon}
			/>
			<div class={css.title}>
				{t.title}
			</div>
			<img
				width="24"
				height="24"
				src={dzIcon}
			/>
			<div class={css.chevronLabel}>
				{`+${fmtNumber(props.value)}`}
			</div>
			<img
				width="24"
				height="24"
				src={chevronRightIcon}
			/>
		</Row>
	)
}
