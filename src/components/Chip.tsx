import { ParentComponent } from 'solid-js'

import { Column } from './Column'
import css from './Chip.module.scss'

export const Chip: ParentComponent = (props) => (
	<Column class={css.chip}>{props.children}</Column>
)
