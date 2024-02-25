import { SlimeRancherItems } from "core/types";

export const getSlimeRancherItemIcon = (
	label: SlimeRancherItems,
): string => {
	return `./assets/icons/${label.replaceAll(
		" ",
		"",
	)}.webp`;
};
