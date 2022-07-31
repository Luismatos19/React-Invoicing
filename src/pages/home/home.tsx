import React from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import InvoiceCard from "../../components/InvoiceCard/invoiceCard";
import { Button } from "../../components/Button/button";
import invoiceAtom from "../../recoil/invoice/atom";
import { Container } from "../../utils/styles/Container";
import { Content } from "./home.styles";
import { Plus } from "react-feather";
import Title from "../../components/Title/title";

const Home: React.FC = () => {
  const invoices = useRecoilValue(invoiceAtom);
  const navigate = useNavigate();

  const handleCardClick = (invoiceId: number) => {
    navigate(`/fatura/${invoiceId}`);
  };

  return (
    <>
      <Container>
        <Content>
          <Title text="Faturas" />

          {invoices.map((invoice) => (
            <InvoiceCard
              onClick={() => handleCardClick(invoice.id)}
              key={invoice.id}
              invoice={invoice}
            />
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Home;
