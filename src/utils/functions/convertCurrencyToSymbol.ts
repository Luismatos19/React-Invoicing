interface currencyOption {
    [key: string]: string
}

export const convertCurrencyToSymbol: currencyOption =  {
    USD: "$",
    EUR: "€",
    BRL: "R$",
    CAD: "C$",
    GBP: "£",
}