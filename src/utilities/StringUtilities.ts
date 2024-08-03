const byWhitespace = /\s+/

export function toStringArray(input: string): Array<string> {
	return input
		.split(byWhitespace)
		.map((element) => element.trim())
		.filter((element) => element.length > 0)
}
