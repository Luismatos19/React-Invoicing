import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Home from "./home";

test("Home Page", () => {
  render(<Home />);

  it("should render page title", () => {
    expect(screen.findAllByText("Faturas")).toBeInTheDocument();
  });
});
