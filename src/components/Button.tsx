import { Component, JSX, Show, splitProps } from 'solid-js'

import copyIcon from '../assets/images/copy.svg'
import { Row } from './Row'
import css from './Button.module.scss'

type Props = {
	onCopyClick?: () => void
} & JSX.HTMLAttributes<HTMLDivElement>

export const Button: Component<Props> = (props) => {
	const [local, passed] = splitProps(props, ["class", "classList", "onCopyClick"])
	return (
		<Row class={css.buttonRow}>
			<div
				{...passed}
				classList={{
					[css.button]: true,
					...(local.class ? {[local.class]: true} : {}),
					...(local.classList ?? {}),
				}}
			/>
			<Show when={local.onCopyClick}>
				<img
					class={css.copyIcon}
					onClick={() => local.onCopyClick?.()}
					draggable="false"
					width="50"
					height="50"
					src={copyIcon}
				/>
			</Show>
		</Row>
	)
}
