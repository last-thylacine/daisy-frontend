import { createEffect } from "solid-js"
import { useCurrentMatches } from "@solidjs/router"

export const useCurrentPage = () => {
	const matches = useCurrentMatches()

	// createEffect(() => {
	// 	console.log("matches");
	// 	console.log(matches());
	// });

	const currentPage = () => matches()?.[0]?.route?.info?.page

	// createEffect(() => {
	// 	console.log("currentPage");
	// 	console.log(currentPage());
	// });

	return currentPage
}
