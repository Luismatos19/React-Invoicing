import { atom } from "recoil"

import { InvoiceItem } from '../../types/InvoiceItem';

const invoiceItemsAtom = atom({
  key: "InvoicesIten",
  default: [] as InvoiceItem[]
})

export default invoiceItemsAtom