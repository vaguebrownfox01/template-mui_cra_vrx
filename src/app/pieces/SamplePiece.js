import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

const SamplePiece = React.memo(function SamplePiece() {
	return (
		<Box sx={{ width: "100%", height: "100%" }}>
			<Typography variant="h6" gutterBottom>
				Title
			</Typography>
		</Box>
	);
});

export default SamplePiece;
