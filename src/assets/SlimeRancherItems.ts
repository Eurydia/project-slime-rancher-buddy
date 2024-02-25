export const getSlimeRancherItemIcon = (
	label: string,
): string => {
	return `./assets/icons/${label.replaceAll(
		" ",
		"",
	)}.webp`;
};
