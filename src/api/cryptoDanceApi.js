import orderbooks from "./data.json";

async function getOrderBooks(currencyPair) {
  return orderbooks;
}

async function getExchangesSummary(currencyPair) {
  return [
    {
      exchange: "bittrex",
      exchangeUrl: "https://bittrex.com",
      symbol: "BTC-ETH",
      high: "0.03304434",
      low: "0.03221759",
      volume: "183.34866548",
      percentChange: "1.93",
    },
    {
      exchange: "poloniex",
      exchangeUrl: "https://poloniex.com",
      symbol: "BTC-ETH",
      high: "0.03304499",
      low: "0.03221475",
      volume: "168.38156745",
      percentChange: "-1.187576",
    },
  ];
}

export { getOrderBooks, getExchangesSummary };
