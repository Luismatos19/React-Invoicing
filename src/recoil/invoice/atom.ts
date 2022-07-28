import { atom } from "recoil"
import { invoicesMock } from "../../mocks/invoicesMock"
import { Invoice } from "../../types/Invoice"

const invoiceAtom = atom({
  key: "invoices",
  default: invoicesMock
})

export default invoiceAtom