import convertCurrency from "../../services/covertCurrency";

const calculationWithExchange =  async (value: number, currency: string): Promise<number> => {
    if(currency === "BRL") return value;
    const price=  await convertCurrency(currency).then(difference => difference * value)
    return Number(price.toFixed(2));
}

export default calculationWithExchange