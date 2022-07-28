import React from "react";
import { Table } from "react-feather";
import { useRecoilValue } from "recoil";

import InvoiceCard from "../components/InvoiceCard/invoiceCard";
import { invoicesMock } from "../mocks/invoicesMock";
import invoiceAtom from "../recoil/invoice/atom";
import { Container } from "../utils/styles/Container";
import { Content } from "./home.styles";

interface Props {}

const Home: React.FC<Props> = () => {
  const invoices = useRecoilValue(invoiceAtom);

  return (
    <>
      <Container>
        <Content>
          {invoices.map((invoice) => (
            <InvoiceCard key={invoice.id} invoice={invoice} />
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Home;
