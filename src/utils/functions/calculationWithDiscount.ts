const calculationWithDiscount = (cost: number, quantity:number, discount: number):number => {
    const discountLeft  = (cost * discount)/ 100
    const result = (cost - discountLeft) * quantity

    return Number(result.toFixed(2))
  };

export default calculationWithDiscount