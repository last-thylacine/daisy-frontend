import css from './Column.module.scss'

export const Column = (props) => {
	return (
		<div
			onClick={props.onClick}
			classList={{[css.column]: true, [props.class]: !!props.class, ...(props.classList ?? {})}}
		>
			{props.children}
		</div>
	)
}
