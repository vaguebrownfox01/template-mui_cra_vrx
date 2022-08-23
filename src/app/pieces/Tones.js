import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";

const Item = styled(Button)(({ theme }) => ({
	textAlign: "center",
	color: theme.palette.text.secondary,
	background: theme.palette.secondary.main,
	textTransform: "none",
	"&:hover": {
		backgroundColor: theme.palette.primary.accent,
		color: theme.palette.primary.main,
	},
	height: "100%",
}));

const Tones = React.memo(function Tones() {
	return (
		<Box sx={{ width: "100%", height: "100%" }}>
			<Typography variant="h6" gutterBottom>
				Breath locations
			</Typography>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 1, md: 1 }}
			>
				{tones.map((tone, i) => (
					<Grid
						alignContent="stretch"
						xs={6}
						key={`${tone.type}-${i}`}
					>
						<Item fullWidth>
							<ToneInfo {...tone} />
						</Item>
					</Grid>
				))}
			</Grid>
		</Box>
	);
});

export default Tones;

const ToneInfo = React.memo(function ToneInfo({ type, label, tone, duration }) {
	return (
		<Box sx={{ width: "100%" }}>
			<Typography variant="body1">{label}</Typography>
			<Typography variant="caption" component="div">
				{tone}
			</Typography>
			<Typography variant="caption" component="div">
				{duration}
			</Typography>
		</Box>
	);
});

const tones = [
	{
		type: "breath",
		label: "Left Upper",
		tone: "C7",
		duration: "2s",
	},
	{
		type: "breath",
		label: "Right Upper",
		tone: "E7",
		duration: "2s",
	},
	{
		type: "breath",
		label: "Left Lower",
		tone: "G7",
		duration: "2s",
	},
	{
		type: "breath",
		label: "Right Lower",
		tone: "B7",
		duration: "2s",
	},
];
