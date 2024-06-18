import { ParentComponent } from 'solid-js'

import { BottomNavigation } from "./BottomNavigation"

export const App: ParentComponent = (props) => (
	<>
		{props.children}
		<BottomNavigation />
	</>
)
