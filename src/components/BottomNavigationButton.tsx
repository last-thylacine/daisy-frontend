import { Component } from 'solid-js'

import { useCurrentPage } from "../hooks/useCurrentPage"
import { useSwitchTab } from "../hooks/useSwitchTab"
import { Column } from "./Column"
import css from './BottomNavigationButton.module.scss'

type Props = {
	page: string
	icon: string
	label: string
}

export const BottomNavigationButton: Component<Props> = (props) => {
	const currentPage = useCurrentPage()
	const switchTab = useSwitchTab()
	return (
		<Column
			classList={{ [css.button]: true, [css.buttonActive]: props.page === currentPage() }}
			onClick={[switchTab, props.page]}
		>
			<img class={css.icon} src={props.icon} />
			<div class={css.label}>{props.label}</div>
		</Column>
	)
}
