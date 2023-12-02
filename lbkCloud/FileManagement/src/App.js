import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Folders from "./components/Folders";

function App() {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </StylesProvider>
  );
}

export default App;
