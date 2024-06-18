export const formatBalance = (num: number) => {
	const rounded_num = Math.round(num)
    const parts = rounded_num.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    return parts.join(".")
}
