import { Component } from 'solid-js'

import css from './PageHeader.module.scss'
import { Column } from './Column'

type Props = {
	icon?: string
	iconWidth?: string
	iconHeight?: string
	title: string
	subtitle?: string
}

export const PageHeader: Component<Props> = (props) => {
	return (
		<Column class={css.container}>
			{props.icon && (
				<img
					draggable="false"
					class={css.icon}
					width={props.iconWidth}
					height={props.iconHeight}
					src={props.icon}
				/>
			)}
			<div class={css.title}>
				{props.title}
			</div>
			{props.subtitle && (
				<div class={css.subtitle}>
					{props.subtitle}
				</div>
			)}
		</Column>
	)
}
