import React, { useEffect, useState } from "react";
import { Trash2 } from "react-feather";
import { useRecoilState, useRecoilValue } from "recoil";

import { InvoiceItem } from "../../types/InvoiceItem";
import { Card, Icon } from "./invoiceItemCard.styles";
import invoiceAtom from "../../recoil/invoice/atom";
import { Invoice } from "../../types/Invoice";
import currencyAtom from "../../recoil/Currency/atom";
import { convertCurrencyToSymbol } from "../../utils/functions/convertCurrencyToSymbol";
import calculationWithDiscount from "../../utils/functions/calculationWithDiscount";
import calculationWithExchange from "../../utils/functions/calculationWithExchange";

interface Props {
  invoiceItem: InvoiceItem;
  invoiceId: number;
}

const InvoiceItemCard: React.FC<Props> = ({ invoiceItem, invoiceId }) => {
  const [cost, setCost] = useState<number>(0);
  const [invoices, setInvoices] = useRecoilState(invoiceAtom);
  const currency = useRecoilValue(currencyAtom);

  const handleDeleteItem = () => {
    const newInvoicesList: Invoice[] = JSON.parse(JSON.stringify(invoices));

    const newInvoice = newInvoicesList.find((item) => item.id === invoiceId);

    const index = Number(
      newInvoice?.items.findIndex((item) => item.id === invoiceItem.id)
    );

    newInvoice?.items.splice(index, index + 1);

    setInvoices(newInvoicesList);
  };

  useEffect(() => {
    calculationWithExchange(invoiceItem.cost, currency).then((value) =>
      setCost(value)
    );
  });

  return (
    <>
      <Card>
        <p>{invoiceItem.description}</p>
        <p>{invoiceItem.quantity}</p>
        <p>
          {convertCurrencyToSymbol[currency]}
          {cost}
        </p>
        <p>{invoiceItem.discount}</p>
        <p>
          {convertCurrencyToSymbol[currency]}
          {calculationWithDiscount(
            cost,
            invoiceItem.quantity,
            invoiceItem.discount
          )}
        </p>
        <Icon>
          <Trash2 onClick={handleDeleteItem} />
        </Icon>
      </Card>
    </>
  );
};
export default InvoiceItemCard;
