export interface ICoin{
    symbol:string,
    buy:number,
    sell:number,
    low:number,
    high:number,
    changeRate:number,
    changePrice:number,
    makerFeeRate:number,
    takerFeeRate:number,
    takerCoefficient:number,
    makerCoefficient:number,
    averagePrice:number,
    vol:number,
    volvalue:number
}