import React, { useState } from "react";
import { useRecoilState } from "recoil";

import invoiceAtom from "../../recoil/invoice/atom";
import { Invoice } from "../../types/Invoice";
import { Button } from "../Button/button";
import Input from "../Input/input";
import { Form } from "./itemForm.styles";

interface Props {
  invoiceId: number;
}

const ItemForm: React.FC<Props> = ({ invoiceId }) => {
  const [id, setId] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  const [invoices, setInvoices] = useRecoilState(invoiceAtom);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setId(Math.random());

    const newItem = {
      id: id,
      description: description,
      cost: cost,
      quantity: quantity,
      discount: discount,
    };

    const newInvoicesList: Invoice[] = JSON.parse(JSON.stringify(invoices));
    const invoice = newInvoicesList.filter((item) => item.id === invoiceId)[0];
    invoice.items = [...invoice.items, newItem];

    setInvoices(newInvoicesList);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Descrição"
          name="description"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="Valor"
          name="cost"
          type="number"
          onChange={(e) => setCost(Number(e.target.value))}
        />
        <Input
          label="Quantidade"
          name="quantity"
          type="number"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <Input
          label="Desconto"
          name="discount"
          type="number"
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
        <Button type="submit" color="secondary">
          Adicionar
        </Button>
      </Form>
    </>
  );
};

export default ItemForm;
