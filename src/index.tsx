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
		<Route info={{ page: '/earn'    }} path={"/earn"}        component={EarnPage} />
		<Route info={{ page: '/grow'    }} path={["/", "/grow"]} component={GrowPage} />
		<Route info={{ page: '/friends' }} path={"/friends"}     component={FriendsPage} />
	</Router>
), document.getElementById('root')!)
