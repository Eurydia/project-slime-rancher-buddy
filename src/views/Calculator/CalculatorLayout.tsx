import { FC, ReactNode } from "react";
import {
	Grid,
	Paper,
	Stack,
	useMediaQuery,
	useTheme,
} from "@mui/material";

type CalculatorLayoutProps = {
	slotSecondary: ReactNode;
	children: ReactNode;
};
export const CalculatorLayout: FC<
	CalculatorLayoutProps
> = (props) => {
	const { slotSecondary, children } = props;
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(
		theme.breakpoints.down("md"),
	);

	if (isSmallScreen) {
		return (
			<Stack>
				<Paper>{slotSecondary}</Paper>
				<Paper>{children}</Paper>
			</Stack>
		);
	}

	return (
		<Grid container>
			<Grid
				item
				xs={12}
				md={4}
			>
				<Paper
					sx={{
						height: "100vh",
						overflowY: "auto",
						scrollbarWidth: "thin",
						padding: 2,
					}}
				>
					{slotSecondary}
				</Paper>
			</Grid>
			<Grid
				item
				xs={12}
				md={8}
			>
				{children}
			</Grid>
		</Grid>
	);
};
