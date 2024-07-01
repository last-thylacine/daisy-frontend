import { Component, Show, createSignal } from 'solid-js'

import { app } from '../common/app'
import { SERVER_URL } from '../common/api'
import { useTimeToRegen } from '../hooks/useTimeToRegen'
import energyIcon from '../assets/images/energy_19.02x24.png'
import { Chip } from './Chip'
import { Row } from './Row'
import { ProgressBar } from './ProgressBar'
import css from './TopUI.module.scss'

export const TopUI: Component = () => {
	const { store, openSettings } = app
	const max_energy = () => 500 * (1 + store.water_power!)
	const timeToRegen = useTimeToRegen()
	const [showAvatar, setShowAvatar] = createSignal(true)
	return (
		<Row class={css.container}>
			<Chip>
				<Show when={store.initialized}>
					<Row class={css.row}>
						<img
							draggable="false"
							width="19.02"
							height="24"
							src={energyIcon}
						/>
						<div class={css.energy}>
							{store.energy}/{max_energy()}
						</div>
					</Row>
					<ProgressBar
						min={0}
						value={store.energy!}
						max={max_energy()}
						variant='blue'>
						{timeToRegen()}
					</ProgressBar>
				</Show>
			</Chip>
			<Chip onClick={openSettings}>
				<Show when={store.initialized}>
					<Row class={css.row}>
						<div class={css.username}>{store.initData.user?.username}</div>
						<Show when={showAvatar()}>
							<img
								class={css.avatar}
								draggable="false"
								width="24"
								height="24"
								src={`${SERVER_URL}/i/${store.initData.user?.id}`}
								onError={() => setShowAvatar(false)}
							/>
						</Show>
					</Row>
					<ProgressBar
						min={0}
						value={0}
						max={100}
						variant='yellow'>
						{'lvl 1/12'}
					</ProgressBar>
				</Show>
			</Chip>
		</Row>
	)
}
