import flowerImage from "../assets/flower.svg"
import dzFlowerImage from "../assets/dz-flower.svg"
import { BottomNavigation } from "../components/BottomNavigation"

const COIN_BALANCE = '340 999'

const GrowPage = () => (
	<>
		<div>
			<img src={dzFlowerImage} />
			<div>{COIN_BALANCE}</div>
		</div>
		<img src={flowerImage} />
		<BottomNavigation />
	</>
)

export default GrowPage
