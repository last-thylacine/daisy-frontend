import { Component } from 'solid-js'

import coinsIcon from "../assets/pepicons-print_coins.svg"
import flowerBudIcon from "../assets/pepicons-print_flower-bud.svg"
import personsIcon from "../assets/pepicons-print_persons.svg"
import { BottomNavigationButton } from "./BottomNavigationButton"
import { Row } from "./Row"
import css from './BottomNavigation.module.scss'

const t = {
	earn: "Earn",
	grow: "Grow",
	friends: "Friends",
}

export const BottomNavigation: Component = () => (
	<Row class={css.container}>
		<BottomNavigationButton
			page={'/earn'}
			icon={coinsIcon}
			label={t.earn}
		/>
		<BottomNavigationButton
			page={'/grow'}
			icon={flowerBudIcon}
			label={t.grow}
		/>
		<BottomNavigationButton
			page={'/friends'}
			icon={personsIcon}
			label={t.friends}
		/>
	</Row>
)
