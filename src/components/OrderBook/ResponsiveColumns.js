import React from "react";
import { Text } from "grommet";

const bidColumns = [
  {
    property: "exchanges",
    header: <Text weight="bold">Exchange</Text>,
    align: "end",
    render: (order) =>
      order.exchanges.map((exchange) => <Text key={exchange}>{exchange}</Text>),
  },
  {
    property: "aggtotal",
    header: <Text weight="bold">Agg.Total</Text>,
    align: "end",
  },
  {
    property: "total",
    header: <Text weight="bold">Total</Text>,
    align: "end",
  },
  {
    property: "quantity",
    header: <Text weight="bold">Quantity</Text>,
    align: "end",
  },
  {
    property: "rate",
    header: <Text weight="bold">Price</Text>,
    align: "end",
    render: (order) => <Text color="#6FFFB0">{order.rate}</Text>,
  },
];

const askColumns = [
  {
    property: "rate",
    header: <Text weight="bold">Price</Text>,
    render: (order) => <Text color="#FD6FFF">{order.rate}</Text>,
  },
  {
    property: "quantity",
    header: <Text weight="bold">Quantity</Text>,
  },
  {
    property: "total",
    header: <Text weight="bold">Total</Text>,
  },
  {
    property: "aggtotal",
    header: <Text weight="bold">Agg.Total</Text>,
  },
  {
    property: "exchanges",
    header: <Text weight="bold">Exchange</Text>,
    render: (order) =>
      order.exchanges.map((exchange) => <Text key={exchange}>{exchange}</Text>),
  },
];

const bidColumnsMedium = [
  {
    property: "exchanges",
    header: <Text weight="bold">Exch</Text>,
    align: "end",
    render: (order) =>
      order.exchanges.map((exchange) => (
        <Text size="medium" key={exchange}>
          {exchange}
        </Text>
      )),
  },
  {
    property: "aggtotal",
    header: <Text weight="bold">Agg.Total</Text>,
    align: "end",
    render: (order) => <Text size="medium">{order.aggtotal}</Text>,
  },
  {
    property: "total",
    header: <Text weight="bold">Total</Text>,
    align: "end",
    render: (order) => <Text size="medium">{order.total}</Text>,
  },
  {
    property: "quantity",
    header: <Text weight="bold">Quantity</Text>,
    align: "end",
    render: (order) => <Text size="medium">{order.quantity.toFixed(3)}</Text>,
  },
  {
    property: "rate",
    header: <Text weight="bold">Price</Text>,
    align: "end",
    render: (order) => (
      <Text size="medium" color="#6FFFB0">
        {order.rate.toFixed(3)}
      </Text>
    ),
  },
];

const askColumnsMedium = [
  {
    property: "rate",
    header: <Text weight="bold">Price</Text>,
    render: (order) => (
      <Text size="medium" color="#FD6FFF">
        {order.rate.toFixed(3)}
      </Text>
    ),
  },
  {
    property: "quantity",
    header: <Text weight="bold">Quantity</Text>,
    render: (order) => <Text size="medium">{order.quantity.toFixed(3)}</Text>,
  },
  {
    property: "total",
    header: <Text weight="bold">Total</Text>,
    render: (order) => <Text size="medium">{order.total}</Text>,
  },
  {
    property: "aggtotal",
    header: <Text weight="bold">Agg.Total</Text>,
    render: (order) => <Text size="medium">{order.aggtotal}</Text>,
  },
  {
    property: "exchanges",
    header: <Text weight="bold">Exch</Text>,
    render: (order) =>
      order.exchanges.map((exchange) => (
        <Text size="medium" key={exchange}>
          {exchange}
        </Text>
      )),
  },
];

const bidColumnsSmall = [
  {
    property: "exchanges",
    header: <Text size="xsmall">Exch</Text>,
    align: "end",
    render: (order) =>
      order.exchanges.map((exchange) => (
        <Text size="xsmall" key={exchange}>
          {exchange}
        </Text>
      )),
  },
  {
    property: "quantity",
    header: <Text size="xsmall">Quantity</Text>,
    align: "end",
    render: (order) => <Text size="xsmall">{order.quantity.toFixed(3)}</Text>,
  },
  {
    property: "rate",
    header: <Text size="xsmall">Price</Text>,
    align: "end",
    render: (order) => (
      <Text size="xsmall" color="#6FFFB0">
        {order.rate.toFixed(3)}
      </Text>
    ),
  },
];

const askColumnsSmall = [
  {
    property: "rate",
    header: <Text size="xsmall">Price</Text>,
    render: (order) => (
      <Text size="xsmall" color="#FD6FFF">
        {order.rate.toFixed(3)}
      </Text>
    ),
  },
  {
    property: "quantity",
    header: <Text size="xsmall">Quantity</Text>,
    render: (order) => <Text size="xsmall">{order.quantity.toFixed(3)}</Text>,
  },
  {
    property: "exchanges",
    header: <Text size="xsmall">Exch</Text>,
    render: (order) =>
      order.exchanges.map((exchange) => (
        <Text size="xsmall" key={exchange}>
          {exchange}
        </Text>
      )),
  },
];

export {
  bidColumns,
  askColumns,
  bidColumnsMedium,
  askColumnsMedium,
  bidColumnsSmall,
  askColumnsSmall,
};
