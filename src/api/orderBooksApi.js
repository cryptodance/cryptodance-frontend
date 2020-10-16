import orderbooks from "./data.json";

async function getOrderBooks(currencyPair) {
  return Promise.resolve(orderbooks);
}

export { getOrderBooks };
