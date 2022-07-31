import { atom } from "recoil"

const currencyAtom = atom({
    key: "Currencys",
    default: "BRL",
  })
  
  export default currencyAtom