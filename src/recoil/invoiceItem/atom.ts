import { atom } from "recoil"

import { InvoiceItem } from '../../types/InvoiceItem';

const invoiceItemsAtom = atom({
  key: "InvoiceItemm",
  default: [] as InvoiceItem[]
})

export default invoiceItemsAtom