import { ParentComponent } from 'solid-js'

import css from './Drawer.module.scss'

type Props = {
	onClose: () => void
}

export const Drawer: ParentComponent<Props> = (props) => {
	return (
		<div onClick={props.onClose} class={css.overlay}>
			<div onClick={e => e.stopPropagation()} class={css.drawer}>
				{props.children}
			</div>
		</div>
	)
}
