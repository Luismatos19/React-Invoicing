import React from "react";

import { Header, Container } from "./header.styles";
import AvatarLogo from "../../assets/images/Avatar-logo.png";

const HeaderComponent: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <h1>INVOICE</h1>
          <img src={AvatarLogo} alt="avatar icon" />
        </Container>
      </Header>
    </>
  );
};

export default HeaderComponent;
