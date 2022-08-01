import React from "react";
import { Content } from "./title.styles";

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Content>{text}</Content>
    </>
  );
};

export default Title;
