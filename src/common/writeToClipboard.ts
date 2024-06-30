export const writeToClipboard = (input: string) => {
	try {
		navigator.clipboard.writeText(input)
	} catch (e) {
		console.warn('Error writing to clipboard: ', e)
	}
}