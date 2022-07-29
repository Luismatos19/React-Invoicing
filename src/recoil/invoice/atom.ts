import { atom } from "recoil"
import { invoicesMock } from "../../mocks/invoicesMock"

const invoiceAtom = atom({
  key: "invoices",
  default: invoicesMock
})

export default invoiceAtom