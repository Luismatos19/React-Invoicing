import React from "react";
import { InvoiceItem } from "../../types/InvoiceItem";
import { Card, Icon } from "./invoiceItemCard.styles";
import { Trash2 } from "react-feather";
import { useRecoilState } from "recoil";
import invoiceAtom from "../../recoil/invoice/atom";
import { Invoice } from "../../types/Invoice";

interface Props {
  invoiceItem: InvoiceItem;
  invoiceId: number;
}

const InvoiceItemCard: React.FC<Props> = ({ invoiceItem, invoiceId }) => {
  const total = () => {
    return (
      (invoiceItem.cost * invoiceItem.quantity * invoiceItem.discount) / 100
    );
  };

  const [invoices, setInvoices] = useRecoilState(invoiceAtom);

  const handleDeleteItem = () => {
    const newInvoicesList: Invoice[] = JSON.parse(JSON.stringify(invoices));

    const newInvoice = newInvoicesList.find((item) => item.id === invoiceId);

    const index = Number(
      newInvoice?.items.findIndex((item) => item.id === invoiceItem.id)
    );

    newInvoice?.items.splice(index, index + 1);

    setInvoices(newInvoicesList);
  };

  return (
    <>
      <Card>
        <p>{invoiceItem.description}</p>
        <p>{invoiceItem.quantity}</p>
        <p>{invoiceItem.cost}</p>
        <p>{invoiceItem.discount}</p>
        <p>{total()}</p>
        <Icon>
          <Trash2 onClick={handleDeleteItem} />
        </Icon>
      </Card>
    </>
  );
};
export default InvoiceItemCard;
