import React, { useContext } from "react";
import { Box, DataTable, Heading, ResponsiveContext, Select } from "grommet";
import {
  bidColumns,
  askColumns,
  bidColumnsMedium,
  askColumnsMedium,
  bidColumnsSmall,
  askColumnsSmall,
} from "./ResponsiveColumns";

function OrderBook(props) {
  let { bids, asks } = props;

  const responsiveSize = useContext(ResponsiveContext);

  const getDataTable = (data, type) => {
    let columns = [];
    if (responsiveSize === "small") {
      columns = type === "bids" ? bidColumnsSmall : askColumnsSmall;
    } else if (responsiveSize === "medium") {
      columns = type === "bids" ? bidColumnsMedium : askColumnsMedium;
    } else {
      columns = type === "bids" ? bidColumns : askColumns;
    }

    let sort = {
      property: "rate",
      direction: type === "bids" ? "desc" : "asc",
    };

    return (
      <DataTable
        columns={columns}
        data={data}
        step={10}
        primaryKey={false}
        sort={sort}
        size="large"
      />
    );
  };

  return (
    <Box width="xlarge" align="center" margin="medium">
      <Box width="large" direction="row" align="center">
        <Box align="center" width="50%">
          <Heading level={3} color="buy">
            Buy
          </Heading>
        </Box>
        <Box>
          <Select options={["BTC-ETH"]} value="BTC-ETH" />
        </Box>
        <Box align="center" width="50%">
          <Heading level={3} color="sell">
            Sell
          </Heading>
        </Box>
      </Box>
      <Box direction="row">
        <Box>{getDataTable(bids, "bids")}</Box>
        <Box>{getDataTable(asks, "asks")}</Box>
      </Box>
    </Box>
  );
}

export default OrderBook;
