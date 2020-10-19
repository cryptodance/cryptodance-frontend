import React, { useContext } from "react";
import { Box, DataTable, ResponsiveContext } from "grommet";
import {
  bidColumns,
  askColumns,
  bidColumnsMedium,
  askColumnsMedium,
  bidColumnsSmall,
  askColumnsSmall,
} from "./ResponsiveColumns";

function OrderBook(props) {
  let { bids, asks, step } = props;

  const responsiveSize = useContext(ResponsiveContext);

  const getDataTable = (data, step, type) => {
    let columns = [];
    if (responsiveSize === "small") {
      columns = type === "bids" ? bidColumnsSmall : askColumnsSmall;
    } else if (responsiveSize === "medium") {
      columns = type === "bids" ? bidColumnsMedium : askColumnsMedium;
    } else {
      columns = type === "bids" ? bidColumns : askColumns;
    }

    return (
      <DataTable
        columns={columns}
        data={data}
        step={step}
        primaryKey={false}
        pin
      />
    );
  };

  return (
    <Box width="xlarge" align="center" margin="medium">
      <Box direction="row">
        {getDataTable(bids, step, "bids")}
        {getDataTable(asks, step, "asks")}
      </Box>
    </Box>
  );
}

export default OrderBook;
