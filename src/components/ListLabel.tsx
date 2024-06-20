import { ParentComponent } from 'solid-js'

import css from './ListLabel.module.scss'

type Props = {
	refresh?: () => void
}

export const ListLabel: ParentComponent<Props> = (props) => {
	return (
		<div class={css.label}>{props.children}</div>
	)
}
