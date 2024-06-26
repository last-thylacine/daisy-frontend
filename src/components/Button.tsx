import { Component, JSX, splitProps } from 'solid-js'

import css from './Button.module.scss'

type Props = JSX.HTMLAttributes<HTMLDivElement>

export const Button: Component<Props> = (props) => {
	const [local, passed] = splitProps(props, ["class", "classList"])
	return (
		<div
			{...passed}
			classList={{
				[css.button]: true,
				...(local.class ? {[local.class]: true} : {}),
				...(local.classList ?? {}),
			}}
		/>
	)
}
