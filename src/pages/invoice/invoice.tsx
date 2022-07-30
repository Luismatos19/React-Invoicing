import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useReactToPrint } from "react-to-print";

import { Button } from "../../components/Button/button";
import InvoiceItenCard from "../../components/InvoiceItenCard/invoiceItemCard";
import ItemForm from "../../components/ItemForm/itemForm";
import Title from "../../components/Title/title";
import getInvoiceById from "../../recoil/invoice/getInvoiceById";
import { hasLogo } from "../../utils/functions/validateLogo";
import { Container } from "../../utils/styles/Container";
import {
  ButtonContainer,
  Infos,
  InfoSection,
  Logo,
  PrintMode,
  Section,
  Subtitle,
} from "./invoice.styles";

interface Props {}

const Invoice: React.FC<Props> = () => {
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);
  const componentRef = useRef(null);

  let params = useParams();
  const invoiceId = Number(params.id);

  const invoice = useRecoilValue(getInvoiceById(invoiceId))[0];

  const handlePrintMode = () => {
    setIsPrintMode(!isPrintMode);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Container>
        <PrintMode active={isPrintMode} ref={componentRef}>
          <Title text="Fatura" />
          <Logo src={hasLogo(invoice.logo)} />
          <Section>
            <InfoSection>
              <Subtitle>Cliente</Subtitle>
              <Infos>
                <b> NOME: </b> {invoice.customer_info.name}
              </Infos>
              <Infos>
                <b>Site:</b>{" "}
                <a href={invoice.customer_info.web_link}>
                  {invoice.customer_info.web_link}
                </a>
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
            </InfoSection>

            <InfoSection>
              <Subtitle>Empresa</Subtitle>
              <Infos>
                <b> NOME: </b> {invoice.company_info.name}
              </Infos>
              <Infos>
                <b>Site:</b>{" "}
                <a href={invoice.company_info.web_link}>
                  {invoice.company_info.web_link}
                </a>
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
            </InfoSection>
          </Section>

          <Subtitle className="items">Itens</Subtitle>
          {invoice.items.map((item, index) => (
            <InvoiceItenCard
              key={index}
              invoiceItem={item}
              invoiceId={invoice.id}
            />
          ))}
          {!isPrintMode && <ItemForm invoiceId={invoice.id} />}
          <ButtonContainer>
            <Button onClick={handlePrintMode} color="primary">
              {isPrintMode ? "Deligar Modo Print" : "Ligar Modo Print"}
            </Button>
            <Button onClick={handlePrint} color="primary">
              Print
            </Button>
          </ButtonContainer>
        </PrintMode>
      </Container>
    </>
  );
};

export default Invoice;
