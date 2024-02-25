import { recipeFromLabel } from "assets/SlimeRancherRecipe";

export const solveIngredients = (
	label: string,
	amount: number,
): Record<string, number> => {
	const recipe = recipeFromLabel(label);

	const result: Record<string, number> = {};
	for (const entry of Object.entries(
		recipe.ingredientRecord,
	)) {
		const [label, cost] = entry;
		result[label] = cost * amount;
	}
	return result;
};
