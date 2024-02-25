import {
	SlimeRancherItems,
	SlimeRancherRecipe,
} from "core/types";

export const SlimeRancherRecipeRegistry: SlimeRancherRecipe[] =
	[];

const registerRecipe = (
	label: string,
	quantity: number,
	ingredientRecord: Record<string, number>,
) => {
	const iconURL = `./assets/icons/${label.replaceAll(
		" ",
		"",
	)}.webp`;
	SlimeRancherRecipeRegistry.push({
		label,
		quantity,
		iconURL,
		ingredientRecord,
	});
};

// One-way teleporter
registerRecipe("Green Home Portal", 1, {
	[SlimeRancherItems.NEWBUCKS]: 800,
	[SlimeRancherItems.ANGLER_PLORT]: 20,
	[SlimeRancherItems.RADIANT_ORE]: 10,
	[SlimeRancherItems.BUZZ_WAX]: 10,
	[SlimeRancherItems.WILD_HONEY]: 5,
});
registerRecipe("Blue Home Portal", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.ROCK_PLORT]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 10,
	[SlimeRancherItems.PRIMORDY_OIL]: 5,
});
registerRecipe("Red Home Portal", 1, {
	[SlimeRancherItems.NEWBUCKS]: 800,
	[SlimeRancherItems.BOOM_PLORT]: 20,
	[SlimeRancherItems.JELLYSTONE]: 10,
	[SlimeRancherItems.PRIMORDY_OIL]: 10,
	[SlimeRancherItems.LAVA_DUST]: 5,
});
registerRecipe("Ember Valley Portal", 1, {
	[SlimeRancherItems.NEWBUCKS]: 1000,
	[SlimeRancherItems.BOOM_PLORT]: 20,
	[SlimeRancherItems.CRYSTAL_PLORT]: 10,
	[SlimeRancherItems.PRIMORDY_OIL]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 10,
	[SlimeRancherItems.STRANGE_DIAMOND]: 1,
});
registerRecipe("Starlight Strand Portal", 1, {
	[SlimeRancherItems.NEWBUCKS]: 1000,
	[SlimeRancherItems.HUNTER_PLORT]: 10,
	[SlimeRancherItems.HONEY_PLORT]: 10,
	[SlimeRancherItems.BUZZ_WAX]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 10,
	[SlimeRancherItems.STRANGE_DIAMOND]: 1,
});
registerRecipe("Powderfall Bluffs Portal", 1, {
	[SlimeRancherItems.NEWBUCKS]: 1000,
	[SlimeRancherItems.SABER_PLORT]: 20,
	[SlimeRancherItems.PUDDLE_PLORT]: 5,
	[SlimeRancherItems.SLIME_FOSSIL]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 10,
	[SlimeRancherItems.STRANGE_DIAMOND]: 1,
});

registerRecipe("Market Link", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.PINK_PLORT]: 20,
	[SlimeRancherItems.PRIMORDY_OIL]: 10,
	[SlimeRancherItems.BUZZ_WAX]: 10,
	[SlimeRancherItems.SLIKY_SAND]: 5,
});
registerRecipe("Refinery Link", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.PHOSPHOR_PLORT]: 10,
	[SlimeRancherItems.JELLYSTONE]: 10,
});

// Two-way teleporter
registerRecipe("Blue Teleporter", 1, {
	[SlimeRancherItems.NEWBUCKS]: 1200,
	[SlimeRancherItems.ROCK_PLORT]: 30,
	[SlimeRancherItems.DEEP_BRINE]: 20,
	[SlimeRancherItems.RADIANT_ORE]: 20,
	[SlimeRancherItems.WILD_HONEY]: 10,
	[SlimeRancherItems.STRANGE_DIAMOND]: 2,
});
registerRecipe("Grey Teleporter", 1, {
	[SlimeRancherItems.NEWBUCKS]: 1200,
	[SlimeRancherItems.TABBY_PLORT]: 30,
	[SlimeRancherItems.BUZZ_WAX]: 20,
	[SlimeRancherItems.RADIANT_ORE]: 20,
	[SlimeRancherItems.SLIKY_SAND]: 10,
	[SlimeRancherItems.STRANGE_DIAMOND]: 2,
});
registerRecipe("Pink Teleporter", 1, {
	[SlimeRancherItems.NEWBUCKS]: 1200,
	[SlimeRancherItems.PINK_PLORT]: 30,
	[SlimeRancherItems.JELLYSTONE]: 20,
	[SlimeRancherItems.RADIANT_ORE]: 20,
	[SlimeRancherItems.LAVA_DUST]: 10,
	[SlimeRancherItems.STRANGE_DIAMOND]: 2,
});
registerRecipe("Violet Teleporter", 1, {
	[SlimeRancherItems.NEWBUCKS]: 1200,
	[SlimeRancherItems.PHOSPHOR_PLORT]: 30,
	[SlimeRancherItems.PRIMORDY_OIL]: 20,
	[SlimeRancherItems.RADIANT_ORE]: 20,
	[SlimeRancherItems.SLIKY_SAND]: 10,
	[SlimeRancherItems.STRANGE_DIAMOND]: 2,
});
registerRecipe("Snowy Teleporter", 1, {
	[SlimeRancherItems.NEWBUCKS]: 1200,
	[SlimeRancherItems.SABER_PLORT]: 30,
	[SlimeRancherItems.SLIME_FOSSIL]: 20,
	[SlimeRancherItems.RADIANT_ORE]: 20,
	[SlimeRancherItems.LAVA_DUST]: 10,
	[SlimeRancherItems.STRANGE_DIAMOND]: 2,
});

// Warp depots
registerRecipe("Blue Warp Depot", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.ROCK_PLORT]: 20,
	[SlimeRancherItems.BUZZ_WAX]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 3,
	[SlimeRancherItems.SLIKY_SAND]: 3,
});
registerRecipe("Grey Warp Depot", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.TABBY_PLORT]: 20,
	[SlimeRancherItems.DEEP_BRINE]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 5,
	[SlimeRancherItems.SLIKY_SAND]: 3,
});
registerRecipe("Pink Warp Depot", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.PINK_PLORT]: 20,
	[SlimeRancherItems.PRIMORDY_OIL]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 5,
	[SlimeRancherItems.SLIKY_SAND]: 3,
});
registerRecipe("Violet Warp Depot", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.BATTY_PLORT]: 20,
	[SlimeRancherItems.JELLYSTONE]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 5,
	[SlimeRancherItems.WILD_HONEY]: 3,
});
registerRecipe("Snowy Warp Depot", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.SABER_PLORT]: 20,
	[SlimeRancherItems.PERFECT_SNOWFLAKE]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 5,
	[SlimeRancherItems.WILD_HONEY]: 3,
});

// Utility
registerRecipe("Dash Pad", 1, {
	[SlimeRancherItems.NEWBUCKS]: 500,
	[SlimeRancherItems.CRYSTAL_PLORT]: 10,
	[SlimeRancherItems.ANGLER_PLORT]: 10,
	[SlimeRancherItems.LAVA_DUST]: 5,
	[SlimeRancherItems.SLIKY_SAND]: 5,
});
registerRecipe("Advanced Gordo Snare", 1, {
	[SlimeRancherItems.NEWBUCKS]: 500,
	[SlimeRancherItems.FLUTTER_PLORT]: 10,
	[SlimeRancherItems.HUNTER_PLORT]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 10,
	[SlimeRancherItems.LAVA_DUST]: 5,
	[SlimeRancherItems.WILD_HONEY]: 5,
});
registerRecipe("Novice Gordo Snare", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.HUNTER_PLORT]: 10,
	[SlimeRancherItems.PRIMORDY_OIL]: 10,
	[SlimeRancherItems.BUZZ_WAX]: 10,
	[SlimeRancherItems.JELLYSTONE]: 10,
});
registerRecipe("Hydro Shower", 1, {
	[SlimeRancherItems.NEWBUCKS]: 500,
	[SlimeRancherItems.FLUTTER_PLORT]: 40,
	[SlimeRancherItems.PUDDLE_PLORT]: 15,
	[SlimeRancherItems.PERFECT_SNOWFLAKE]: 10,
	[SlimeRancherItems.WILD_HONEY]: 5,
});
registerRecipe("Hydro Turret", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.BOOM_PLORT]: 10,
	[SlimeRancherItems.PUDDLE_PLORT]: 5,
	[SlimeRancherItems.DEEP_BRINE]: 5,
});
registerRecipe("Med Station", 1, {
	[SlimeRancherItems.NEWBUCKS]: 100,
	[SlimeRancherItems.PINK_PLORT]: 10,
	[SlimeRancherItems.DEEP_BRINE]: 10,
	[SlimeRancherItems.JELLYSTONE]: 5,
});
registerRecipe("Portable Scareslime", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.BATTY_PLORT]: 30,
	[SlimeRancherItems.RINGTAIL_PLORT]: 10,
	[SlimeRancherItems.JELLYSTONE]: 10,
	[SlimeRancherItems.SLIKY_SAND]: 5,
});
registerRecipe("Fruit Slime Bait", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.PHOSPHOR_PLORT]: 20,
	[SlimeRancherItems.BATTY_PLORT]: 10,
	[SlimeRancherItems.HONEY_PLORT]: 10,
	[SlimeRancherItems.BUZZ_WAX]: 10,
});
registerRecipe("Meat Slime Bait", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.TABBY_PLORT]: 20,
	[SlimeRancherItems.BOOM_PLORT]: 10,
	[SlimeRancherItems.HUNTER_PLORT]: 10,
	[SlimeRancherItems.PRIMORDY_OIL]: 10,
});
registerRecipe("Veggie Slime Bait", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.COTTON_PLORT]: 20,
	[SlimeRancherItems.ROCK_PLORT]: 10,
	[SlimeRancherItems.CRYSTAL_PLORT]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 10,
});
registerRecipe("Portable Water Tap", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.PUDDLE_PLORT]: 10,
	[SlimeRancherItems.ANGLER_PLORT]: 10,
	[SlimeRancherItems.DEEP_BRINE]: 10,
	[SlimeRancherItems.RADIANT_ORE]: 5,
});
registerRecipe("Slime Stage", 1, {
	[SlimeRancherItems.NEWBUCKS]: 500,
	[SlimeRancherItems.PINK_PLORT]: 20,
	[SlimeRancherItems.TABBY_PLORT]: 10,
	[SlimeRancherItems.BUZZ_WAX]: 10,
	[SlimeRancherItems.LAVA_DUST]: 5,
});
registerRecipe("Snowball Machine", 1, {
	[SlimeRancherItems.NEWBUCKS]: 2000,
	[SlimeRancherItems.SABER_PLORT]: 20,
	[SlimeRancherItems.PERFECT_SNOWFLAKE]: 10,
	[SlimeRancherItems.STRANGE_DIAMOND]: 1,
});
registerRecipe("Spring Pad", 1, {
	[SlimeRancherItems.NEWBUCKS]: 500,
	[SlimeRancherItems.COTTON_PLORT]: 10,
	[SlimeRancherItems.PHOSPHOR_PLORT]: 10,
	[SlimeRancherItems.SLIKY_SAND]: 5,
	[SlimeRancherItems.WILD_HONEY]: 5,
});
registerRecipe("Super Hydro Turret", 1, {
	[SlimeRancherItems.NEWBUCKS]: 500,
	[SlimeRancherItems.BOOM_PLORT]: 30,
	[SlimeRancherItems.PUDDLE_PLORT]: 10,
	[SlimeRancherItems.DEEP_BRINE]: 10,
	[SlimeRancherItems.SLIKY_SAND]: 5,
});
registerRecipe("Taming Bell", 1, {
	[SlimeRancherItems.NEWBUCKS]: 250,
	[SlimeRancherItems.FLUTTER_PLORT]: 10,
	[SlimeRancherItems.COTTON_PLORT]: 10,
	[SlimeRancherItems.PRIMORDY_OIL]: 10,
	[SlimeRancherItems.WILD_HONEY]: 5,
});
registerRecipe("Attention Flag", 1, {
	[SlimeRancherItems.NEWBUCKS]: 50,
	[SlimeRancherItems.PINK_PLORT]: 5,
	[SlimeRancherItems.JELLYSTONE]: 1,
});
registerRecipe("Cautious Flag", 1, {
	[SlimeRancherItems.NEWBUCKS]: 50,
	[SlimeRancherItems.PINK_PLORT]: 5,
	[SlimeRancherItems.SLIME_FOSSIL]: 1,
});
registerRecipe("Curious Flag", 1, {
	[SlimeRancherItems.NEWBUCKS]: 50,
	[SlimeRancherItems.PINK_PLORT]: 5,
	[SlimeRancherItems.SLIME_FOSSIL]: 1,
});
registerRecipe("Fruit Flag", 1, {
	[SlimeRancherItems.NEWBUCKS]: 50,
	[SlimeRancherItems.PINK_PLORT]: 5,
	[SlimeRancherItems.DEEP_BRINE]: 1,
});
registerRecipe("Meat Flag", 1, {
	[SlimeRancherItems.NEWBUCKS]: 50,
	[SlimeRancherItems.PINK_PLORT]: 5,
	[SlimeRancherItems.BUZZ_WAX]: 1,
});
registerRecipe("Veggie Flag", 1, {
	[SlimeRancherItems.NEWBUCKS]: 50,
	[SlimeRancherItems.PINK_PLORT]: 5,
	[SlimeRancherItems.PRIMORDY_OIL]: 1,
});
registerRecipe("Easy Breeze Fan", 1, {
	[SlimeRancherItems.NEWBUCKS]: 500,
	[SlimeRancherItems.DERVISH_PLORT]: 10,
	[SlimeRancherItems.ROCK_PLORT]: 5,
	[SlimeRancherItems.DEEP_BRINE]: 3,
});
registerRecipe("Stunt Cannon", 1, {
	[SlimeRancherItems.NEWBUCKS]: 1000,
	[SlimeRancherItems.BOOM_PLORT]: 20,
	[SlimeRancherItems.FIRE_PLORT]: 5,
	[SlimeRancherItems.LAVA_DUST]: 3,
});
registerRecipe("Accelerator", 1, {
	[SlimeRancherItems.NEWBUCKS]: 50,
	[SlimeRancherItems.RINGTAIL_PLORT]: 1,
	[SlimeRancherItems.DEEP_BRINE]: 1,
});
