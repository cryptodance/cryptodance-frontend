import React, { useState, useEffect } from "react";
import OrderBook from "./OrderBook";
import Spinner from "../Spinner";
import { getOrderBooks } from "../../api/cryptoDanceApi";

function OrderBookContainer(props) {
  const [symbol, setSymbol] = useState("btc_eth");
  const [orderBooks, setOrderBooks] = useState();

  useEffect(() => {
    const fetchOrderBooks = async () => {
      let orderBooksData = await getOrderBooks(symbol);
      setOrderBooks(orderBooksData);
    };
    fetchOrderBooks();
  }, []);

  return orderBooks ? (
    <OrderBook bids={orderBooks.bids} asks={orderBooks.asks} />
  ) : (
    <Spinner />
  );
}

export default OrderBookContainer;
