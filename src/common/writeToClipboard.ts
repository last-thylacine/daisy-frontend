export const writeToClipboard = (input: string) => {
	try {
		navigator.clipboard.writeText(input)
	} catch (e) {
		console.error('Error writing to clipboard: ', e)
	}
}