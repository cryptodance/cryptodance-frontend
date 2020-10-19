async function getOrderBooks(currencyPair) {
  let response = await fetch(
    "https://cloud.cryptodance.xyz/orderbooks/btc_eth"
  );
  let orderbook = response.json();
  return orderbook;
}

async function getExchangesSummary(currencyPair) {
  let response = await fetch(
    "https://cloud.cryptodance.xyz/marketsummary/btc_eth"
  );
  let marketsSummaries = response.json();
  return marketsSummaries;
}

export { getOrderBooks, getExchangesSummary };
