import {
	CssBaseline,
	ThemeProvider,
	createTheme,
} from "@mui/material";
import { Calculator } from "views/Calculator/Calculator";

const theme = createTheme({
	palette: {
		mode: "dark",
	},
});

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Calculator />
		</ThemeProvider>
	);
};
