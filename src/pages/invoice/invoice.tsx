import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Button } from "../../components/Button/button";
import InvoiceItenCard from "../../components/InvoiceItenCard/invoiceItemCard";
import ItemForm from "../../components/ItemForm/itemForm";

import Title from "../../components/Title/title";
import getInvoiceById from "../../recoil/invoice/getInvoiceById";
import { Container } from "../../utils/styles/Container";
import { Infos, Subtitle } from "./invoice.styles";

interface Props {}

const Invoice: React.FC<Props> = () => {
  let params = useParams();
  const invoiceId = Number(params.id);

  const invoice = useRecoilValue(getInvoiceById(invoiceId))[0];

  const handlePrintMode = () => {};

  return (
    <>
      <Container>
        <Title text="Fatura" />
        <Subtitle>Cliente</Subtitle>
        <Infos>
          <b> NOME: </b> {invoice.customer_info.name}
        </Infos>
        <Infos>
          <b>Site:</b> {invoice.customer_info.web_link}
        </Infos>
        <Infos>
          <b>Endereço principal:</b> {invoice.customer_info.address1}
        </Infos>
        <Infos>
          <b>Endereço secundario:</b> {invoice.customer_info.address2}
        </Infos>
        <Infos>
          <b>Codigo Postal: </b>
          {invoice.customer_info.postal}
        </Infos>

        <Subtitle>Empresa</Subtitle>
        <Infos>
          <b> NOME: </b> {invoice.company_info.name}
        </Infos>
        <Infos>
          <b>Site:</b> {invoice.company_info.web_link}
        </Infos>
        <Infos>
          <b>Endereço principal:</b> {invoice.company_info.address1}
        </Infos>
        <Infos>
          <b>Endereço secundario:</b> {invoice.company_info.address2}
        </Infos>
        <Infos>
          <b>Codigo Postal: </b>
          {invoice.company_info.postal}
        </Infos>

        <Subtitle>Itens</Subtitle>
        {invoice.items.map((item, index) => (
          <InvoiceItenCard
            key={index}
            invoiceItem={item}
            invoiceId={invoice.id}
          />
        ))}
        <ItemForm invoiceId={invoice.id} />
        <Button onClick={handlePrintMode} color="primary">
          Modo Print
        </Button>
      </Container>
    </>
  );
};

export default Invoice;
