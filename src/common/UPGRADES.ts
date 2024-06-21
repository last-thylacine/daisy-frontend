import flowerIcon from "../assets/flower_40x31.22_3x.png"
import powerIcon from "../assets/power_40x37.6_3x.png"

export const UPGRADES = [
	{
		id: "1",
		name: "Multi Flower",
		description: "Increase the amount of coins you can earn per tap",
		effect: `+1 coin for tap for level {{level}}`,
		level: 1,
		cost: 1000,
		icon: flowerIcon,
		iconWidth: "40",
		iconHeight: "31.22",
	},
	{
		id: "2",
		name: "Water Power",
		description: "Increase the amount of water",
		effect: `+500 water points for level {{level}}`,
		level: 1,
		cost: 1000,
		icon: powerIcon,
		iconWidth: "40",
		iconHeight: "37.6",
	},
]
