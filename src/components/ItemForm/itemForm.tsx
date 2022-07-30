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

  const [invoices, setInvoices] = useRecoilState(invoiceAtom);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setId(Math.random());

    const newItem = {
      id: id,
      description: description,
      cost: cost,
      quantity: quantity,
    };
    const newInvoicesList: Invoice[] = JSON.parse(JSON.stringify(invoices));
    const invoice: any = newInvoicesList.find((item) => item.id === invoiceId);
    invoice.items = [...invoice.items, newItem];
    console.log(newInvoicesList);
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
        <Button type="submit" color="secondary">
          Adicionar
        </Button>
      </Form>
    </>
  );
};

export default ItemForm;
