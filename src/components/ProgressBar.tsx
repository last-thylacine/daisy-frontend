import { Component } from 'solid-js'

import css from './ProgressBar.module.scss'

type Props = {
	min: number
	value: number
	max: number
	variant: "blue" | "yellow"
}

export const ProgressBar: Component<Props> = (props) => {
	const progress = () => {
		const total_distance = props.max - props.min
		const distance_covered = props.value - props.min
		return Math.floor(distance_covered / total_distance)
	}
	return (
		<div classList={{
			[css.bar]: true,
			[css[props.variant]]: true,
		}}>
			<div style={{ width: `${progress()}%`}} classList={{
				[css.progress]: true,
				[css[props.variant]]: true,
			}}/>
		</div>
	)
}
