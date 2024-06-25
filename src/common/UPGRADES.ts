import flowerIcon from "../assets/images/flower_40x31.22_3x.png"
import flowerImage from "../assets/images/multi_flower_108.48x80_3x.png"
import powerIcon from "../assets/images/power_40x37.6_3x.png"
import powerImage from "../assets/images/water_power_85.25x80_3x.png"

export const UPGRADES = [
	{
		id: "multi_flower",
		title: "Multi Flower",
		description: "Increase the amount of coins you can earn per tap",
		effect: `+1 coin for tap for level {{level}}`,
		cost: (level: number) => 1000 * 2 ** (level-1),
		icon: flowerIcon,
		iconWidth: "40",
		iconHeight: "31.22",
		image: flowerImage,
		imageWidth: "108.48",
		imageHeight: "80",
	},
	{
		id: "water_power",
		title: "Water Power",
		description: "Increase the amount of water",
		effect: `+500 water points for level {{level}}`,
		cost: (level: number) => 1000 * 2 ** (level-1),
		icon: powerIcon,
		iconWidth: "40",
		iconHeight: "37.6",
		image: powerImage,
		imageWidth: "85.25",
		imageHeight: "80",
	},
]
