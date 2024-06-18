import { Chip } from "../components/Chip"
import { CoinCounter } from "../components/CoinCounter"
import { Daisy } from "../components/Daisy"
import { FarmButton } from "../components/FarmButton"
import { Row } from "../components/Row"

const GrowPage = () => (
	<>
		<Row>
			<Chip />
			<Chip />
		</Row>
		<CoinCounter />
		<Daisy />
		<FarmButton />
	</>
)

export default GrowPage
