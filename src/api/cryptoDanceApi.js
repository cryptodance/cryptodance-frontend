const BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function getOrderBooks(currencyPair) {
  let response = await fetch(`${BASE_URL}/orderbooks/btc_eth`);
  let orderbook = response.json();
  return orderbook;
}

async function getExchangesSummary(currencyPair) {
  let response = await fetch(`${BASE_URL}/marketsummary/btc_eth`);
  let marketsSummaries = response.json();
  return marketsSummaries;
}

export { getOrderBooks, getExchangesSummary };
