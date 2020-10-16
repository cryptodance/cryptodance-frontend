import React, { useState, useEffect } from "react";
import OrderBook from "./OrderBook";
import { getOrderBooks } from "../../api/orderBooksApi";

function OrderBookContainer(props) {
  const [orderBooks, setOrderBooks] = useState({});
  const [step, setStep] = useState(1000);

  useEffect(() => {
    async function fetchOrderBooks() {
      let data = await getOrderBooks("btc_eth");
      console.log(data);
      setOrderBooks(data);
    }
    fetchOrderBooks();
  }, []);

  return (
    <OrderBook bids={orderBooks.bids} asks={orderBooks.asks} step={step} />
  );
}

export default OrderBookContainer;
