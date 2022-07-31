import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useReactToPrint } from "react-to-print";
import Select from "react-select";

import { Button } from "../../components/Button/button";
import InvoiceItenCard from "../../components/InvoiceItenCard/invoiceItemCard";
import ItemForm from "../../components/ItemForm/itemForm";
import Title from "../../components/Title/title";
import getInvoiceById from "../../recoil/invoice/getInvoiceById";
import { hasLogo } from "../../utils/functions/validateLogo";
import { Container } from "../../utils/styles/Container";
import {
  ButtonContainer,
  InfoHeader,
  Infos,
  InfoSection,
  Logo,
  PrintMode,
  Section,
  selectCustomStyles,
  Subtitle,
} from "./invoice.styles";
import { currencyOptionsMock } from "../../mocks/currencyOptionsMock";
import currencyAtom from "../../recoil/Currency/atom";

const Invoice: React.FC = () => {
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const componentRef = useRef(null);

  const params = useParams();
  const invoiceId = Number(params.id);

  const invoice = useRecoilValue(getInvoiceById(invoiceId))[0];
  const [currency, setCurrency] = useRecoilState(currencyAtom);

  const handlePrintMode = () => {
    setIsPrintMode(!isPrintMode);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleCurrencyChange = (e: any) => {
    setSelectedOption(e.value);
    setCurrency(e.value);
  };

  return (
    <>
      <Container>
        <PrintMode active={isPrintMode} ref={componentRef}>
          <Title text="Fatura" />
          <Logo src={hasLogo(invoice.logo)} />
          {!isPrintMode && (
            <Select
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  text: "orangered",
                  primary25: "hotpink",
                  primary: "black",
                },
              })}
              styles={selectCustomStyles}
              value={selectedOption}
              onChange={handleCurrencyChange}
              options={currencyOptionsMock}
              placeholder="Selecione uma moeda"
            />
          )}
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
          <InfoHeader>
            <p>Descrição</p>
            <p>Quantidade</p>
            <p>Preço: {currency}</p>
            <p>Desconto %</p>
            <p>Total</p>
            <p>Açoes</p>
          </InfoHeader>
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
