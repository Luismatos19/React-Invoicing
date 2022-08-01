import React, { useEffect, useRef, useState } from "react";
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
  TotalSection,
} from "./invoice.styles";
import { currencyOptionsMock } from "../../mocks/currencyOptionsMock";
import currencyAtom from "../../recoil/Currency/atom";
import calculationWithDiscount from "../../utils/functions/calculationWithDiscount";
import { convertCurrencyToSymbol } from "../../utils/functions/convertCurrencyToSymbol";
import { EyeOff } from "react-feather";
import { InvoiceItem } from "../../types/InvoiceItem";
import { Invoice } from "../../types/Invoice";
import invoiceItemsAtom from "../../recoil/invoiceItem/atom";
import calculationWithExchange from "../../utils/functions/calculationWithExchange";

const Invoice: React.FC = () => {
  const [subtotal, setSubtotal] = useState<number>(0);
  const [isPrintMode, setIsPrintMode] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLogoVisible, setisLogoVisible] = useState<boolean>(true);
  const componentRef = useRef(null);

  const params = useParams();
  const invoiceId = Number(params.id);

  const invoice = useRecoilValue(getInvoiceById(invoiceId))[0];
  const [currency, setCurrency] = useRecoilState(currencyAtom);
  const [invoices, setInvoicesItems] = useRecoilState(invoiceItemsAtom);

  setInvoicesItems(invoice.items);

  const handlePrintMode = () => {
    setIsPrintMode(!isPrintMode);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleCurrencyChange = async (e: any) => {
    setSelectedOption(e.value);
    setCurrency(e.value);
  };

  const subtotalCalculation = (): void => {
    let subTotal = 0;
    invoice.items.map((item: InvoiceItem) => {
      const itemTotal = calculationWithDiscount(
        item.cost,
        item.quantity,
        item.discount
      );
      subTotal = subTotal + itemTotal;
    });

    calculationWithExchange(subTotal, currency).then((value) =>
      setSubtotal(value)
    );
  };

  const totalWithTax = (): string => {
    const tax = subtotal * (invoice.tax / 100);
    return (subtotal + tax).toFixed(2);
  };

  const handleHideLogo = (): void => {
    setisLogoVisible(!isLogoVisible);
  };

  useEffect(() => {
    subtotalCalculation();
  });

  return (
    <>
      <Container>
        <PrintMode active={isPrintMode} ref={componentRef}>
          <Title text="Fatura" />
          {isLogoVisible && <Logo src={hasLogo(invoice.logo)} />}
          <EyeOff onClick={handleHideLogo} />
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
              invoiceId={invoice.id}
              invoiceItem={item}
            />
          ))}
          +
          <TotalSection>
            <h2>
              <b>Subtotal:</b>
            </h2>
            <p>
              {convertCurrencyToSymbol[currency]}
              {subtotal}
            </p>
          </TotalSection>
          <TotalSection>
            <h2>
              <b>Impostos:</b>
            </h2>
            <p>{invoice.tax}%</p>
          </TotalSection>
          <TotalSection>
            <h2>
              <b>Total:</b>
            </h2>
            <p>
              {convertCurrencyToSymbol[currency]}
              {totalWithTax()}
            </p>
          </TotalSection>
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
