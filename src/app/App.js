import * as React from "react";
import Layout from "./components/Layout";
import Tones from "./pieces/Tones";

const App = React.memo(function App() {
	return (
		<Layout>
			<Tones />
		</Layout>
	);
});

export default App;
