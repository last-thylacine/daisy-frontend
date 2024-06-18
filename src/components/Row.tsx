import { ParentComponent, JSX, splitProps } from 'solid-js'

import css from './Row.module.scss'

type Props = JSX.HTMLAttributes<HTMLDivElement>

export const Row: ParentComponent<Props> = (props) => {
	const [local, passed] = splitProps(props, ["class", "classList"])
	return (
		<div
			{...passed}
			classList={{
				[css.row]: true,
				...(local.class ? {[local.class]: true} : {}),
				...(local.classList ?? {}),
			}}
		/>
	)
}
