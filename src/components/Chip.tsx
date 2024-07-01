import { JSX, ParentComponent, splitProps } from 'solid-js'

import { Column } from './Column'
import css from './Chip.module.scss'

type Props = JSX.HTMLAttributes<HTMLDivElement>

export const Chip: ParentComponent<Props> = (props) => {
	const [local, passed] = splitProps(props, ["class", "classList"])
	return (
		<Column
			{...passed}
			classList={{
				[css.chip]: true,
				...(local.class ? {[local.class]: true} : {}),
				...(local.classList ?? {}),
			}}>
			{props.children}
		</Column>
	)
}
