export const minmax = function <T> (min: T, max: T) {
	return function (x: T) {
		if (x <= min) return min
		if (x >= max) return max
		return x
	}
}
