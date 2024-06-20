import { DailyBonusButton } from "../components/DailyBonusButton"
import dzFlowerImage from "../assets/dz_96x96_3x.png"

const t = {
	earn: "Earn more coins",
}

const EarnPage = () => (
	<>
		<img
			width="96"
			height="96"
			src={dzFlowerImage}
		/>
		<div>{t.earn}</div>
		<DailyBonusButton value={1000} />
	</>
)

export default EarnPage
