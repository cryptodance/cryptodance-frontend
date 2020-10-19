import React, { useState, useEffect } from "react";
import { Box } from "grommet";
import ExchangeSummaryCard from "./ExchangeSummaryCard";
import { getExchangesSummary } from "../../api/cryptoDanceApi";

function ExchangeSummaryCardContainer(props) {
  const [exchangesSummary, setExchangesSummary] = useState([]);

  useEffect(() => {
    async function fetchOrderBooks() {
      let exchangesSummaryData = await getExchangesSummary("symbol");

      setExchangesSummary(exchangesSummaryData);
    }
    fetchOrderBooks();
  }, []);

  return (
    <Box
      align="center"
      justify="center"
      margin="medium"
      direction="row"
      wrap
      gap="medium"
    >
      {exchangesSummary.map((exchangeSummary) => (
        <ExchangeSummaryCard
          key={exchangeSummary.exchange}
          exchangeSummary={exchangeSummary}
        />
      ))}
    </Box>
  );
}

export default ExchangeSummaryCardContainer;
