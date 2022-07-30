import React from "react";

import { Invoice } from "../../types/Invoice";
import { hasLogo } from "../../utils/functions/validateLogo";
import { Avatar, Card, Info } from "./invoiceCard.styles";

interface Props {
  invoice: Invoice;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const InvoiceCard: React.FC<Props> = ({ invoice, onClick }) => {
  const INVOICE_ITENS_LENGTH = invoice.items.length;

  return (
    <>
      <Card onClick={onClick}>
        <Avatar src={hasLogo(invoice.logo)} />
        <Info>{invoice.customer_info.name}</Info>
        <Info>{invoice.company_info.name}</Info>
        <Info>{INVOICE_ITENS_LENGTH}</Info>
      </Card>
    </>
  );
};

export default InvoiceCard;
