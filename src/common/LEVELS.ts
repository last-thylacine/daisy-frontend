export const LEVELS = {
	// returns minimal balance (in coins) required for level=`level`
	cost: (level: number) => (2 ** (level - 1) - 1) * 100000,
}
