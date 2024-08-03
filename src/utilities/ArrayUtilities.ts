export function notFalse<Element>(
	element: Element | false,
): element is Element {
	return element !== false
}
