import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppContainer from "./AppContainer";
import BaseRouter from "../routes";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <BaseRouter />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
