import { useMatch, useNavigate } from '@solidjs/router'
import { Component, Show } from 'solid-js'

import { app } from '../common/app'
import { DAILY_BONUS } from '../common/DAILY_BONUS'
import { fmtNumber } from '../common/fmtNumber'
import chevronRightIcon from "../assets/images/chevron_right_24.svg"
import dzIcon from "../assets/images/dz_24x24_3x.png"
import giftIcon from "../assets/images/gift.svg"
import { DailyBonusDrawer } from './DailyBonusDrawer'
import { Row } from './Row'
import css from './DailyBonusButton.module.scss'

const t = {
	'title': "Daily Bonus",
}

export const DailyBonusButton: Component = () => {
	const { store } = app
	const navigate = useNavigate()
	const openDrawer = () => navigate('/earn/daily_bonus')
	const closeDrawer = () => navigate('/earn')
	const isActive = useMatch(() => `${import.meta.env.BASE_URL}/earn/daily_bonus`)
	return (
		<>
			<Row
				onClick={openDrawer}
				class={css.container}>
				<Show when={store.initialized}>
					<img
						draggable="false"
						width="40"
						height="40"
						src={giftIcon}
					/>
					<div class={css.title}>
						{t.title}
					</div>
					<img
						draggable="false"
						width="24"
						height="24"
						src={dzIcon}
					/>
					<div class={css.chevronLabel}>
						{`+${fmtNumber(DAILY_BONUS.rewards[(store.daily_bonus_level ?? 0)+1].reward)}`}
					</div>
					<img
						draggable="false"
						width="24"
						height="24"
						src={chevronRightIcon}
					/>
				</Show>
			</Row>
			<Show when={isActive()}>
				<DailyBonusDrawer onClose={closeDrawer}/>
			</Show>
		</>
	)
}
