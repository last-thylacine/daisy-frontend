import coinsIcon from "../assets/pepicons-print_coins.svg"
import flowerBudIcon from "../assets/pepicons-print_flower-bud.svg"
import personsIcon from "../assets/pepicons-print_persons.svg"

const t = {
	earn: "Earn",
	grow: "Grow",
	friends: "Friends",
}

export const BottomNavigation = () => (
	<div>
		<div>
			<img src={coinsIcon} />
			<div>{t.earn}</div>
		</div>
		<div>
			<img src={flowerBudIcon} />
			<div>{t.grow}</div>
		</div>
		<div>
			<img src={personsIcon} />
			<div>{t.friends}</div>
		</div>
	</div>
)
