import { useCurrentMatches } from "@solidjs/router"

export const useCurrentPage = () => {
	const matches = useCurrentMatches()
	const currentPage = () => matches()?.[0]?.route?.info?.page
	return currentPage
}
