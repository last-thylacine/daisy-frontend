/* @refresh reload */
import { lazy } from "solid-js"
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router"

import './index.css'
import { App } from "./components/App"

const EarnPage = lazy(() => import("./pages/EarnPage"))
const GrowPage = lazy(() => import("./pages/GrowPage"))
const FriendsPage = lazy(() => import("./pages/FriendsPage"))

render(() => (
	<Router root={App}>
		<Route path="/earn" component={EarnPage} />
		<Route path={["/", "/grow"]} component={GrowPage} />
		<Route path="/friends" component={FriendsPage} />
	</Router>
), document.getElementById('root')!)
