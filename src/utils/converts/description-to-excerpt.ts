export const descriptionToExcerpt = (
	description: string,
	maxLength: number
) => {
	if (description.length > maxLength)
		return `${description.substring(0, maxLength)}...`
	else return description
}
