import React, { useState, useEffect } from "react";
import OrderBook from "./OrderBook";
import { getOrderBooks } from "../../api/cryptoDanceApi";

function OrderBookContainer(props) {
  const [symbol, setSymbol] = useState("btc_eth");
  const [orderBooks, setOrderBooks] = useState({});
  const [step, setStep] = useState(1000);

  useEffect(() => {
    async function fetchOrderBooks() {
      let orderBooksData = await getOrderBooks(symbol);
      setOrderBooks(orderBooksData);
    }
    fetchOrderBooks();
  }, []);

  return (
    <OrderBook bids={orderBooks.bids} asks={orderBooks.asks} step={step} />
  );
}

export default OrderBookContainer;
