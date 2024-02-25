import { AddRounded } from "@mui/icons-material";
import {
	Box,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Stack,
} from "@mui/material";
import { getSlimeRancherItemIcon } from "assets/SlimeRancherItems";
import {
	SlimeRancherRecipeRegistry,
	recipeFromLabel,
} from "assets/SlimeRancherRecipe";
import { StyledSelect } from "components/StyledSelect";
import { StyledTextField } from "components/StyledTextField";
import { solveIngredients } from "core/solveIngredients";
import { FC, Fragment, useState } from "react";
import { CalculatorLayout } from "views/Calculator/CalculatorLayout";

const RECIPE_LABELS = Object.keys(
	SlimeRancherRecipeRegistry,
).sort();

export const Calculator: FC = () => {
	const [gadgets, setGoals] = useState<
		[label: string, amount: string][]
	>([]);

	const handleGoalChange = (
		nextGoal: string,
		index: number,
	) => {
		setGoals((prev) => {
			const next = [...prev];
			next[index] = [
				recipeFromLabel(nextGoal).label,
				prev[index][1],
			];
			return next;
		});
	};

	const handleGoalAdd = () => {
		setGoals((prev) => {
			const next = [...prev];
			next.push([RECIPE_LABELS[0], "1"]);
			return next;
		});
	};

	const handleGoalAmountChange = (
		nextAmount: string,
		index: number,
	) => {
		setGoals((prev) => {
			const next = [...prev];
			next[index] = [prev[index][0], nextAmount];
			return next;
		});
	};

	const goalResults: Record<string, number>[] =
		[];
	for (const gadget of gadgets) {
		const [label, amount] = gadget;
		const _amount = Number.parseInt(amount);
		if (!Number.isNaN(_amount) && _amount !== 0) {
			goalResults.push(
				solveIngredients(label, _amount),
			);
		}
	}

	return (
		<CalculatorLayout
			slotSecondary={
				<Fragment>
					<Stack spacing={4}>
						{gadgets.map(
							([gadget, count], index) => (
								<Stack
									key={`${gadget}-${index}`}
									spacing={2}
								>
									<StyledSelect
										label="Gadget"
										value={gadget}
										onValueChange={(label) =>
											handleGoalChange(
												label,
												index,
											)
										}
										options={RECIPE_LABELS}
										optionToIconURL={(label) =>
											recipeFromLabel(label)
												.iconURL
										}
									/>
									<StyledTextField
										label="Amount"
										value={count}
										maxLength={3}
										onChange={(value) =>
											handleGoalAmountChange(
												value,
												index,
											)
										}
										onReset={() =>
											handleGoalAmountChange(
												"",
												index,
											)
										}
									/>
								</Stack>
							),
						)}
						<Box>
							<IconButton onClick={handleGoalAdd}>
								<AddRounded />
							</IconButton>
						</Box>
					</Stack>
				</Fragment>
			}
		>
			<Stack
				height="100vh"
				overflow="auto"
				spacing={4}
				padding={4}
			>
				{goalResults.map((result, index) => (
					<Paper
						key={`item-${index}`}
						square
						sx={{ padding: 2 }}
					>
						<List dense>
							{Object.entries(result).map(
								([label, amount]) => (
									<ListItem key={label}>
										<ListItemIcon>
											<img
												loading="lazy"
												height="64px"
												width="auto"
												alt={label}
												src={getSlimeRancherItemIcon(
													label,
												)}
											/>
										</ListItemIcon>
										<ListItemText
											secondary={label}
										>
											{amount}
										</ListItemText>
									</ListItem>
								),
							)}
						</List>
					</Paper>
				))}
			</Stack>
		</CalculatorLayout>
	);
};
