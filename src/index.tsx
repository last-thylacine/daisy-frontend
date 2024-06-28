/* @refresh reload */
// import { lazy } from "solid-js"
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router"
import WebApp from '@twa-dev/sdk'
// import eruda from 'eruda'

import { App } from "./components/App"
import EarnPage from "./pages/EarnPage"
import GrowPage from "./pages/GrowPage"
import FriendsPage from "./pages/FriendsPage"
import './index.scss'

// const EarnPage = lazy(() => import("./pages/EarnPage"))
// const GrowPage = lazy(() => import("./pages/GrowPage"))
// const FriendsPage = lazy(() => import("./pages/FriendsPage"))

// the only usage of tg api:
WebApp.ready()
WebApp.expand()

// eruda.init()

render(() => (
	<Router root={App} base={import.meta.env.BASE_URL}>
		<Route info={{ tab: '/earn'    }} path={"/earn/*"}        component={EarnPage} />
		<Route info={{ tab: '/grow'    }} path={["/", "/grow/*"]} component={GrowPage} />
		<Route info={{ tab: '/friends' }} path={"/friends/*"}     component={FriendsPage} />
	</Router>
), document.getElementById('root')!)
