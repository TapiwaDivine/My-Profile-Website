import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainContainer from "./containers/MainContainer";
import BaseRouter from "./routes";

function App() {
	return (
		<BrowserRouter>
			<MainContainer>
				<BaseRouter />
			</MainContainer>
		</BrowserRouter>
	);
}

export default App;
