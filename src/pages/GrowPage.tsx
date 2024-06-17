import { Chip } from "../components/Chip"
import { CoinCounter } from "../components/CoinCounter"
import { Daisy } from "../components/Daisy"
import { Row } from "../components/Row"

const GrowPage = () => (
	<>
		<Row>
			<Chip />
			<Chip />
		</Row>
		<CoinCounter />
		<Daisy />
	</>
)

export default GrowPage
