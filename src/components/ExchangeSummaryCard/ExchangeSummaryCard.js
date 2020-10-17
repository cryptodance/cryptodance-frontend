import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from "grommet";

import { Descending, Ascending } from "grommet-icons";

function ExchangeSummaryCard(props) {
  const {
    symbol,
    volume,
    percentChange,
    exchange,
    exchangeUrl,
  } = props.exchangeSummary;

  return (
    <Card
      width="medium"
      border={{ color: "white", size: "medium" }}
      margin="medium"
    >
      <CardBody pad="small" margin="small">
        <Box justify="between" align="center" direction="row">
          <Box>
            <Heading level={3} margin="none">
              {volume}
            </Heading>
            <Text size="small">24h Volume</Text>
          </Box>
          <Box>
            {parseFloat(percentChange) < 0 ? (
              <Heading color="sell" level={4} margin="none">
                {parseFloat(percentChange).toFixed(2)}%{" "}
                <Descending color="sell" />
              </Heading>
            ) : (
              <Heading color="buy" level={4} margin="none">
                {parseFloat(percentChange).toFixed(2)}%{" "}
                <Ascending color="buy" />
              </Heading>
            )}
            <Text size="small">24h Change</Text>
          </Box>
        </Box>
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} margin="small">
        <Heading level={4} margin="none" pad="none">
          {symbol}
        </Heading>
        <Button target="_blank" href={exchangeUrl} label={exchange} />
      </CardFooter>
    </Card>
  );
}

export default ExchangeSummaryCard;
