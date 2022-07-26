import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";

import Home from "./pages/home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
