import { Component, ParentComponent, JSX } from 'solid-js'

import css from './__COMPONENT_NAME__.module.scss'

type Props = JSX.HTMLAttributes<HTMLDivElement>

export const __COMPONENT_NAME__: ParentComponent<Props> = (props) => {
	return (
		<div class={css.container}>
			{props.children}
		</div>
	)
}
