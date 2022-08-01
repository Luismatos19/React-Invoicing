import { currencyExchangeResponse } from "../types/currencyApiResponse"
import api from "./api/api"

const convertCurrency = async (currency: string) => {
    const conversion = `BRL_${currency}`
    
    const {data} =  await api.get<currencyExchangeResponse>(`${conversion}/?token=${process.env.REACT_APP_API_KEY}`)
    //return prince from api reponse
    const price = [Object.values(data)[0]][0].price
    return price
}

export default convertCurrency
