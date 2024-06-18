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
	</>
)

export default EarnPage
