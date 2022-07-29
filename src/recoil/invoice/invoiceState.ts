import {  selectorFamily } from "recoil";
import invoiceAtom from "./atom";

const getInvoiceById = selectorFamily({
    key: "GetInvoiceById",
    get:(invoiceId) => ({get}) => {
        const invoices = get(invoiceAtom)
        return invoices.filter(invoice => invoiceId === invoice.id)
    }
})

export default getInvoiceById;