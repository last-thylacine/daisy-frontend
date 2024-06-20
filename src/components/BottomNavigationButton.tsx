import { Component } from 'solid-js'

import { useCurrentTab } from "../hooks/useCurrentTab"
import { useSwitchTab } from "../hooks/useSwitchTab"
import { Column } from "./Column"
import css from './BottomNavigationButton.module.scss'

type Props = {
	page: string
	icon: string
	label: string
}

export const BottomNavigationButton: Component<Props> = (props) => {
	const currentTab = useCurrentTab()
	const switchTab = useSwitchTab()
	return (
		<Column
			onClick={[switchTab, props.page]}
			classList={{
				[css.button]: true,
				[css.buttonActive]: props.page === currentTab()
			}}>
			<img
				draggable="false"
				class={css.icon}
				src={props.icon}
			/>
			<div class={css.label}>
				{props.label}
			</div>
		</Column>
	)
}
