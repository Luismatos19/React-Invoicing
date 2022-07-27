import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#EE5A6F",
    secundary: "#06B49A",
    grayLight: "#dddddd",
    white: "#FFFFFF",
    black: "#000000",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  paddings: {},
};

interface Props {
  children: React.ReactNode;
}

const Theme: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
