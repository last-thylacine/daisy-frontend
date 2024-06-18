import { useCurrentMatches } from "@solidjs/router"

export const useCurrentTab = () => {
	const matches = useCurrentMatches()
	const currentTab = () => matches()?.[0]?.route?.info?.tab
	return currentTab
}
