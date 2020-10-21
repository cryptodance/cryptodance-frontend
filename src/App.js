import React from "react";
import { Grommet, Box, Heading, Paragraph } from "grommet";

import Nav from "./components/Nav";
import OrderBookContainer from "./components/OrderBook";
import ExchangeSummaryCardContainer from "./components/ExchangeSummaryCard";
import { cryptoDanceThemeLight, cryptoDanceThemeDark } from "./theme";

const THEMES = {
  cryptoDanceThemeLight,
  cryptoDanceThemeDark,
};

function App() {
  const [themeName, setThemeName] = React.useState("cryptoDanceThemeDark");

  return (
    <Grommet theme={THEMES[themeName || "grommet"]}>
      <Box height="100vh">
        <Box pad="large">
          <Nav />
        </Box>
        <Box align="center">
          <Heading level="1" size="large" textAlign="center" margin="none">
            Combined Order Book
          </Heading>
          <Paragraph size="xxlarge" textAlign="center">
            A combined order book that takes the full order books from Bittrex
            and Poloniex
          </Paragraph>
        </Box>
        <Box align="center">
          <ExchangeSummaryCardContainer />
        </Box>
        <Box align="center">
          <OrderBookContainer />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
