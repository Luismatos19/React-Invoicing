import React from "react";
import { Plus } from "react-feather";

import { Button } from "../components/Button/button";
import Input from "../components/Input/input";
import { Container } from "../utils/styles/Container";
import { Content } from "./home.styles";

interface Props {}

const Home: React.FC<Props> = () => {
  const onClick = () => {};

  return (
    <>
      <Container>
        <Content>
          <Button onClick={onClick} color="primary">
            <Plus />
            Adicionar
          </Button>
          <Input name="name" label="Nome" />
        </Content>
      </Container>
    </>
  );
};

export default Home;
