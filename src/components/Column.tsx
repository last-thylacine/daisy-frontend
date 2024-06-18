import { ParentComponent, JSX, splitProps } from 'solid-js'

import css from './Column.module.scss'

type Props = JSX.HTMLAttributes<HTMLDivElement>

export const Column: ParentComponent<Props> = (props) => {
	const [local, passed] = splitProps(props, ["class", "classList"])
	return (
		<div
			{...passed}
			classList={{
				[css.column]: true,
				...(local.class ? {[local.class]: true} : {}),
				...(local.classList ?? {}),
			}}
		/>
	)
}
