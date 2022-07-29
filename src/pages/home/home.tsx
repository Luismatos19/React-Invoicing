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

interface Props {}

const Home: React.FC<Props> = () => {
  const invoices = useRecoilValue(invoiceAtom);
  let navigate = useNavigate();

  const handleAddInvoice = () => {};

  const handleCardClick = (invoiceId: number) => {
    navigate(`/fatura/${invoiceId}`);
  };

  return (
    <>
      <Container>
        <Content>
          <Title text="Faturas" />
          <div className="button">
            <Button onClick={handleAddInvoice} color="primary">
              <Plus />
              Adicionar
            </Button>
          </div>

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
