
import {  selectorFamily } from "recoil";
import invoiceAtom from "./atom";
import { Invoice } from '../../types/Invoice';

const getInvoiceById = selectorFamily({
    key: "GetInvoiceById",
    get:(invoiceId) => ({get}) => {
        const invoices = get(invoiceAtom)
        return invoices.filter((invoice: Invoice) => invoiceId === invoice.id)
    }
})

export default getInvoiceById;