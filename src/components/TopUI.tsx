import { Component, Show } from 'solid-js'

import { app } from '../common/app'
import energyIcon from '../assets/energy_19.02x24.png'
import { Chip } from './Chip'
import { Row } from './Row'
import { ProgressBar } from './ProgressBar'
import css from './TopUI.module.scss'

export const TopUI: Component = () => {
	const { store } = app
	const loaded = () => store.energy !== null && store.max_energy !== null
	return (
		<Row class={css.container}>
			<Chip>
				<Show when={loaded()}>
					<Row class={css.row}>
						<img
							draggable="false"
							width="19.02"
							height="24"
							src={energyIcon}
						/>
						<div class={css.energy}>
							{store.energy}/{store.max_energy}
						</div>
					</Row>
					<ProgressBar
						min={0}
						value={store.energy!}
						max={store.max_energy!}
						variant='blue' />
				</Show>
			</Chip>
			<Chip>
				<Show when={loaded()}>
					<Row class={css.row}>
						<div class={css.username}>{store.initData.user?.username}</div>
						<div class={css.avatar} />
					</Row>
					<ProgressBar
						min={1}
						value={1}
						max={12}
						variant='yellow' />
				</Show>
			</Chip>
		</Row>
	)
}
