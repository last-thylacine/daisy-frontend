import flowerIcon from "../assets/flower_40x31.22_3x.png"
import powerIcon from "../assets/power_40x37.6_3x.png"

const t = {
	flower: "Multi Flower",
	power: "Water Power",
}

export const UPGRADES = [
	{
		name: t.flower,
		level: 1,
		cost: 1000,
		icon: flowerIcon,
		iconWidth: "40",
		iconHeight: "31.22",
	},
	{
		name: t.power,
		level: 1,
		cost: 1000,
		icon: powerIcon,
		iconWidth: "40",
		iconHeight: "37.6",
	},
]
