import { ParentComponent } from 'solid-js'

import css from './Drawer.module.scss'

export const Drawer: ParentComponent = (props) => {
	return (
		<>
			<div class={css.overlay}></div>
			<div class={css.container}>
				<div class={css.drawer}>
					{props.children}
				</div>
			</div>
		</>
	)
}
