import { app } from "../common/app"
import dzFlowerImage from "../assets/dz-flower.svg"
import { Row } from './Row'
import css from './CoinCounter.module.scss'

export const CoinCounter = () => {
	const { store } = app
	return (
		<Row class={css.container}>
			<img class={css.image} src={dzFlowerImage} />
			<div class={css.text}>{store.coins_fmt}</div>
		</Row>
	)
}
