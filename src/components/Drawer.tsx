import { Component, JSX } from 'solid-js'

import css from './Drawer.module.scss'

type Props = JSX.HTMLAttributes<HTMLDivElement>

export const Drawer: Component<Props> = () => {
	return (
		<div class={css.overlay}>
			<div />
		</div>
	)
}
