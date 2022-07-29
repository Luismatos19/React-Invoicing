import React from "react";
import { InvoiceIten } from "../../types/InvoiceIten";
import { Card, Icon } from "./invoiceItemCard.styles";
import { Trash2 } from "react-feather";

interface Props {
  invoiceIten: InvoiceIten;
  invoiceId: number;
}

const InvoiceItenCard: React.FC<Props> = ({ invoiceIten, invoiceId }) => {
  const total = () => {
    return invoiceIten.cost * invoiceIten.quantity;
  };

  const handleDeleteIten = () => {};

  return (
    <>
      <Card>
        <p>{invoiceIten.description}</p>
        <p>{invoiceIten.quantity}</p>
        <p>{invoiceIten.cost}</p>
        <p>{total()}</p>
        <Icon>
          <Trash2 onClick={handleDeleteIten} />
        </Icon>
      </Card>
    </>
  );
};
export default InvoiceItenCard;
