import {
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { SlimeRancherRecipeRegistry } from "assets/SlimeRancherRecipe";

export const App = () => {
	return (
		<Container>
			<List>
				{SlimeRancherRecipeRegistry.map(
					({ label, iconURL }) => (
						<ListItem key={label}>
							<ListItemIcon>
								<img
									width="auto"
									height="128px"
									src={iconURL}
									alt={label}
								/>
							</ListItemIcon>
							<ListItemText>{label}</ListItemText>
						</ListItem>
					),
				)}
			</List>
		</Container>
	);
};
