import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
export const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#000",
		},
		secondary: {
			main: red[400],
		},
		error: {
			main: red.A400,
		},
	},

	components: {
		MuiStepContent: {
			styleOverrides: {
				last: {
					margin: 0,
					marginTop: 16,
					padding: 8,
				},
			},
		},
	},
});

// Create a theme instance.
const darktheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#142850",
			accent: "#00A8CC",
			text: "#F9F5EB",
		},
		secondary: {
			main: "#27496D",
			accent: "#0C7B93",
		},
		error: {
			main: red.A400,
		},
	},

	components: {
		MuiStepContent: {
			styleOverrides: {
				last: {
					margin: 0,
					marginTop: 16,
					padding: 8,
				},
			},
		},
	},
});

export default darktheme;
