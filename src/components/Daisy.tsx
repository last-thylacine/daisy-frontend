import WebApp from '@twa-dev/sdk'
import { Component } from 'solid-js'

import { app } from "../common/app"
import flowerImage from "../assets/images/flower.svg"
import css from './Daisy.module.scss'

// const createTicker = () => {
// 	const array = ['light', 'medium', 'heavy', 'rigid', 'soft'] as const
// 	let i = 0
// 	return () => {
// 		const variant = array[i++ % array.length]
// 		console.log({variant})
// 		return variant
// 	}
// }

// const ticker = createTicker()

const createParticle = (left: number, top: number, value: number) => {
	const particle_text = document.createElement('div')
	particle_text.classList.add(css["particle-text"])
	particle_text.textContent = `+${value}`

	const particle = document.createElement('div')
	particle.classList.add(css.particle)
	particle.style.position = 'absolute'
	particle.style.left = `${left}px`
	particle.style.top = `${top}px`

	particle.addEventListener("animationend", particle.remove);

	particle.appendChild(particle_text)
	document.body.appendChild(particle)
}

export const Daisy: Component = () => {
	const { store, tap } = app
	const handleMouseUp = (e: MouseEvent & {
		currentTarget: HTMLImageElement;
		target: Element;
	}) => {
		if (store.multi_flower) {
			createParticle(e.clientX, e.clientY, store.multi_flower)
			tap()
		}
	}
	const handleTouchEnd = (e: TouchEvent & {
		currentTarget: HTMLImageElement;
		target: Element;
	}) => {
		e.preventDefault()
		if (store.multi_flower) {
			for (const touch of e.changedTouches) {
				createParticle(touch.clientX, touch.clientY, store.multi_flower)
			}
			if (store.settings.haptic_feedback) {
				WebApp.HapticFeedback.impactOccurred(store.settings.haptic_feedback)
			}
			tap()
		}
	}
	return (
		<img
			class={css.daisy}
			draggable="false"
			width="280"
			height="280"
			onMouseUp={handleMouseUp}
			onTouchEnd={handleTouchEnd}
			src={flowerImage}
		/>
	)
}
