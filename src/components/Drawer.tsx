import { ParentComponent, JSX, splitProps } from 'solid-js'

import closeIcon from '../assets/close.svg'
import { Column } from './Column'
import css from './Drawer.module.scss'

type Props = {
	onClose: () => void
} & JSX.HTMLAttributes<HTMLDivElement>

export const Drawer: ParentComponent<Props> = (props) => {
	const [local, passed] = splitProps(props, ["children", "onClose", "class", "classList"])
	return (
		<div
			class={css.overlay}
			onClick={() => local.onClose()}
		>
			<Column
				{...passed}
				onClick={e => e.stopPropagation()}
				classList={{
					[css.drawer]: true,
					...(local.class ? {[local.class]: true} : {}),
					...(local.classList ?? {}),
				}}
			>
				<img
					onClick={() => local.onClose()}
					class={css.closeIcon}
					draggable="false"
					width="28"
					height="28"
					src={closeIcon}
				/>
				{local.children}
			</Column>
		</div>
	)
}
