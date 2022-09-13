import * as React from "react";
import Layout from "./components/Layout";
import SamplePiece from "./pieces/SamplePiece";

const App = React.memo(function App() {
	return (
		<Layout>
			<SamplePiece />
		</Layout>
	);
});

export default App;
