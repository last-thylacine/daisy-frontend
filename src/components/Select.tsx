import { Component, For } from 'solid-js'

// import css from './Select.module.scss'

type Option = {
	name: string
	value: string
}

type Props = {
	options: Option[]
	value: string
	onChange: (new_value: any) => void
}

export const Select: Component<Props> = (props) => {
	return (
		<select
			value={props.value}
			onInput={(e) => {
				const new_value = e.currentTarget.value
				if (props.value !== new_value)
					props.onChange(new_value)

			}}>
			<For each={props.options}>
				{({ name, value }) => (
					<option value={value}>
						{name}
					</option>
				)}
			</For>
		</select>
	)
}
