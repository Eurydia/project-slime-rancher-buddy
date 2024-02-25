export enum SlimeRancherItems {
	NEWBUCKS = "Newbucks",
	DEEP_BRINE = "Deep Brine",
	PRIMORDY_OIL = "Primordy Oil",
	SLIKY_SAND = "Silky Sand",
	LAVA_DUST = "Lava Dust",
	JELLYSTONE = "Jellystone",
	RADIANT_ORE = "Radiant Ore",
	STRANGE_DIAMOND = "Strange Diamond",
	SLIME_FOSSIL = "Slime Fossil",
	PERFECT_SNOWFLAKE = "Perfect Snowflake",
	SUN_SAP = "Sun Sap",
	LIGHTNING_MOTE = "Lightning Mote",
	STORM_GLASS = "Storm Glass",
	DRITING_CRYSTAL = "Drifting Crystal",
	WILD_HONEY = "Wild Honey",
	BUZZ_WAX = "Buzz Wax",
	COTTON_PLORT = "Cotton Plort",
	FLUTTER_PLORT = "Flutter Plort",
	BATTY_PLORT = "Batty Plort",
	ANGLER_PLORT = "Angler Plort",
	RINGTAIL_PLORT = "Ringtail Plort",
	PINK_PLORT = "Pink Plort",
	ROCK_PLORT = "Rock Plort",
	PHOSPHOR_PLORT = "Phosphor Plort",
	TABBY_PLORT = "Tabby Plort",
	HONEY_PLORT = "Honey Plort",
	BOOM_PLORT = "Boom Plort",
	PUDDLE_PLORT = "Puddle Plort",
	FIRE_PLORT = "Fire Plort",
	CRYSTAL_PLORT = "Crystal Plort",
	HUNTER_PLORT = "Hunter Plort",
	SABER_PLORT = "Saber Plort",
	GOLD_PLORT = "Gold Plort",
	YOLKY_PLORT = "Yolky Plort",
	DERVISH_PLORT = "Dervish Plort",
	TANGLE_PLORT = "Tangle Plort",
}

export type SlimeRancherRecipe = {
	label: string;
	quantity: number;
	iconURL: string;
	ingredientRecord: Record<string, number>;
};
