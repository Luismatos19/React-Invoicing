import React from "react";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "../../globalStyles";
import Theme from "../../Theme";

interface Props {
  children: React.ReactNode;
}

const MenuProvider: React.FC<Props> = ({ children }) => {
  return (
    <RecoilRoot>
      <React.StrictMode>
        <HashRouter>
          <Theme>
            <GlobalStyle />
            {children}
          </Theme>
        </HashRouter>
      </React.StrictMode>
    </RecoilRoot>
  );
};

export default MenuProvider;
