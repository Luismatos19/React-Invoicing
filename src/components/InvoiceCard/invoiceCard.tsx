import React from "react";

import { Invoice } from "../../types/Invoice";
import { Avatar, Card, Info } from "./invoiceCard.styles";
import CompanyLogo from "../../assets/images/company-logo.jpg";

interface Props {
  invoice: Invoice;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const InvoiceCard: React.FC<Props> = ({ invoice, onClick }) => {
  const INVOICE_ITENS_LENGTH = invoice.items.length;

  const hasLogo = () => {
    if (invoice.logo === "") return CompanyLogo;

    return invoice.logo;
  };

  return (
    <>
      <Card onClick={onClick}>
        <Avatar src={hasLogo()} />
        <Info>{invoice.customer_info.name}</Info>
        <Info>{invoice.company_info.name}</Info>
        <Info>{INVOICE_ITENS_LENGTH}</Info>
      </Card>
    </>
  );
};

export default InvoiceCard;
