import css from './Row.module.scss'

export const Row = (props) => (
	<div class={css.Row}>{props.children}</div>
)
