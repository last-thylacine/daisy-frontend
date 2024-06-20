import { Component } from 'solid-js'

import { app } from '../common/app'
import energyIcon from '../assets/energy_19.02x24.png'
import { Chip } from './Chip'
import { Row } from './Row'
import css from './TopUI.module.scss'

export const TopUI: Component = () => {
	const { store } = app
	return (
		<Row>
			<Chip>
				<Row>
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
			</Chip>
			<Chip></Chip>
		</Row>
	)
}
