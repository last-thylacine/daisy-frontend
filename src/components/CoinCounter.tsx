import dzFlowerImage from "../assets/dz-flower.svg"
import { Row } from './Row'
import css from './CoinCounter.module.scss'

const COIN_BALANCE = '340 999'

export const CoinCounter = () => (
	<Row class={css.container}>
		<img class={css.image} src={dzFlowerImage} />
		<div class={css.text}>{COIN_BALANCE}</div>
	</Row>
)
