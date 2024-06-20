import { FriendList } from "../components/FriendList"
import { InviteFriends } from "../components/InviteFriends"
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
		<InviteFriends />
		<FriendList />
	</>
)

export default FriendsPage
