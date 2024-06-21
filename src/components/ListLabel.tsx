import { ParentComponent, Show } from 'solid-js'

import refreshIcon from '../assets/refresh.svg'
import { Row } from './Row'
import css from './ListLabel.module.scss'

type Props = {
	refresh?: () => void
}

export const ListLabel: ParentComponent<Props> = (props) => {
	return (
		<Row class={css.container}>
			<div class={css.label}>
				{props.children}
			</div>
			<Show when={props.refresh}>
				<img
					draggable="false"
					width="24"
					height="24"
					src={refreshIcon}
				/>
			</Show>
		</Row>
	)
}
