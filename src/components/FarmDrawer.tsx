import { useNavigate } from '@solidjs/router'
import { Component } from 'solid-js'

import { Drawer } from './Drawer'
import { Upgrades } from './Upgrades'

export const FarmDrawer: Component = () => {
	const navigate = useNavigate()
	const closeDrawer = () => navigate('/grow')
	return (
		<Drawer onClose={closeDrawer}>
			<Upgrades />
		</Drawer>
	)
}
