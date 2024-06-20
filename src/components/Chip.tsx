import { ParentComponent } from 'solid-js'

import css from './Chip.module.scss'

export const Chip: ParentComponent = (props) => (
	<div class={css.chip}>{props.children}</div>
)
