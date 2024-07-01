import { Component, For, createSignal } from 'solid-js'

// import css from './Select.module.scss'

type Option = {
	name: string
	value: string
}

type Props = {
	options: Option[]
	onChange: (new_value: any) => void
}

export const Select: Component<Props> = (props) => {
	// eslint-disable-next-line solid/reactivity
	const [selected, setSelected] = createSignal(props.options[0].value)
	return (
		<select
			value={selected()}
			onInput={(e) => {
				const new_value = e.currentTarget.value
				if (selected() !== new_value) {
					setSelected(e.currentTarget.value)
					props.onChange(new_value)
				}

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
