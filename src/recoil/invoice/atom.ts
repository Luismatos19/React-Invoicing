import { atom } from "recoil"

import { invoicesMock } from "../../mocks/invoicesMock"
import { Invoice } from "../../types/Invoice"

const invoiceAtom = atom({
  key: "Invoices",
  default: invoicesMock as Invoice[],
})

export default invoiceAtom