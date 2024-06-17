import css from './Row.module.scss'

export const Row = (props) => (
	<div
		onClick={props.onClick}
		classList={{[css.row]: true, [props.class]: !!props.class, ...(props.classList ?? {})}}
	>
		{props.children}
	</div>
)
