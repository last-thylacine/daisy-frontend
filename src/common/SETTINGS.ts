import { IMPACT_STYLES, NOTIFICATION_TYPES } from "./HAPTIC_FEEDBACK"

const decorate = (value: string) => {
	const name = `"${value}"`
	return { name, value }
}

export const SETTINGS = {
	haptic_feedback: [
		{
			name: 'disable',
			value: "",
		},
		...IMPACT_STYLES.map(decorate),
		...NOTIFICATION_TYPES.map(decorate),
	]
}
