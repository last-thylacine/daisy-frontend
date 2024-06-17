import { useNavigate } from "@solidjs/router"

export const useSwitchTab = () => {
	const navigate = useNavigate()
	const switchTab = (tab: string) => navigate(tab)
	return switchTab
}
