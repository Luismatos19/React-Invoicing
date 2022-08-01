import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "../home";
import MenuProvider from "../../../components/MenuProvider/menuProvider";

render(
  <MenuProvider>
    <Home />
  </MenuProvider>
);
describe("Home Page tests", () => {
  it("should render page title", () => {
    expect(screen.findAllByText("Faturas")).toBeInTheDocument;
  });
});
