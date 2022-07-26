import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/Header/header";
import GlobalStyle from "./globalStyles";

import Home from "./pages/home";
import Theme from "./Theme";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Theme>
    </>
  );
}

export default App;
