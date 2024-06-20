import { PageHeader } from "../components/PageHeader"

const t = {
	title: "Invite friends!",
	subtitle: "You and your friend will receive bonuses",
}

const FriendsPage = () => (
	<>
		<PageHeader
			title={t.title}
			subtitle={t.subtitle} />
	</>
)

export default FriendsPage
