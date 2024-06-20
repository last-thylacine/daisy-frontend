import { DailyBonusButton } from "../components/DailyBonusButton"
import dzFlowerImage from "../assets/dz_96x96_3x.png"
import { PageHeader } from "../components/PageHeader"
import { TaskList } from "../components/TaskList"

const t = {
	earn: "Earn more coins",
}

const EarnPage = () => (
	<>
		<PageHeader
			icon={dzFlowerImage}
			iconWidth="96"
			iconHeight="96"
			title={t.earn} />
		<DailyBonusButton reward={1000} />
		<TaskList />
	</>
)

export default EarnPage
