import {  selectorFamily } from "recoil";
import { InvoiceItem } from "../../types/InvoiceItem";
import invoiceItemsAtom from "./atom";

const getInvoiceItemById = selectorFamily({
    key: "GetInvoiceItemById",
    get:(invoiceItemId) => ({get}) => {
        const invoiceItems = get(invoiceItemsAtom)
        return invoiceItems.filter((item: InvoiceItem ) => invoiceItemId === item.id)[0]
    }
})

export default getInvoiceItemById;