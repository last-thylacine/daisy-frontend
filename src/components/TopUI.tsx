import { Component } from 'solid-js'

import { Chip } from './Chip'
import { Row } from './Row'
import css from './TopUI.module.scss'

export const TopUI: Component = () => {
	return (
		<Row>
			<Chip />
			<Chip />
		</Row>
	)
}
