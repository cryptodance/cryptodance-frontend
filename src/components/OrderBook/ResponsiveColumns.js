import React from "react";
import { Text } from "grommet";

const bidColumns = [
  {
    property: "exchanges",
    header: (
      <Text size="small" weight="bold">
        Exchange
      </Text>
    ),
    align: "end",
    render: (order) =>
      order.exchanges.map((exchange) => (
        <Text size="small" key={exchange}>
          {exchange}
        </Text>
      )),
  },
  {
    property: "aggtotal",
    header: (
      <Text size="small" weight="bold">
        Agg.Total
      </Text>
    ),
    align: "end",
    render: (order) => <Text size="small">{order.aggtotal.toFixed(4)}</Text>,
  },
  {
    property: "total",
    header: (
      <Text size="small" weight="bold">
        Total
      </Text>
    ),
    align: "end",
    render: (order) => <Text size="small">{order.total.toFixed(4)}</Text>,
  },
  {
    property: "quantity",
    header: (
      <Text size="small" weight="bold">
        Quantity
      </Text>
    ),
    align: "end",
    render: (order) => <Text size="small">{order.quantity.toFixed(8)}</Text>,
  },
  {
    property: "rate",
    header: (
      <Text size="small" weight="bold">
        Price
      </Text>
    ),
    align: "end",
    render: (order) => (
      <Text size="small" color="#6FFFB0">
        {order.rate.toFixed(8)}
      </Text>
    ),
  },
];

const askColumns = [
  {
    property: "rate",
    header: (
      <Text size="small" weight="bold">
        Price
      </Text>
    ),
    render: (order) => (
      <Text size="small" color="#FD6FFF">
        {order.rate.toFixed(8)}
      </Text>
    ),
  },
  {
    property: "quantity",
    header: (
      <Text size="small" weight="bold">
        Quantity
      </Text>
    ),
    render: (order) => <Text size="small">{order.quantity.toFixed(8)}</Text>,
  },
  {
    property: "total",
    header: (
      <Text size="small" weight="bold">
        Total
      </Text>
    ),
    render: (order) => <Text size="small">{order.total.toFixed(4)}</Text>,
  },
  {
    property: "aggtotal",
    header: (
      <Text size="small" weight="bold">
        Agg.Total
      </Text>
    ),
    render: (order) => <Text size="small">{order.aggtotal.toFixed(4)}</Text>,
  },
  {
    property: "exchanges",
    header: (
      <Text size="small" weight="bold">
        Exchange
      </Text>
    ),
    render: (order) =>
      order.exchanges.map((exchange) => (
        <Text size="small" key={exchange}>
          {exchange}
        </Text>
      )),
  },
];

const bidColumnsMedium = [
  {
    property: "exchanges",
    header: (
      <Text size="small" weight="bold">
        Exch
      </Text>
    ),
    align: "end",
    render: (order) =>
      order.exchanges.map((exchange) => (
        <Text size="small" size="medium" key={exchange}>
          {exchange}
        </Text>
      )),
  },
  {
    property: "aggtotal",
    header: (
      <Text size="small" weight="bold">
        Agg.Total
      </Text>
    ),
    align: "end",
    render: (order) => <Text size="small">{order.aggtotal.toFixed(3)}</Text>,
  },
  {
    property: "total",
    header: (
      <Text size="small" weight="bold">
        Total
      </Text>
    ),
    align: "end",
    render: (order) => <Text size="small">{order.total.toFixed(3)}</Text>,
  },
  {
    property: "quantity",
    header: (
      <Text size="small" weight="bold">
        Quantity
      </Text>
    ),
    align: "end",
    render: (order) => <Text size="small">{order.quantity.toFixed(3)}</Text>,
  },
  {
    property: "rate",
    header: (
      <Text size="small" weight="bold">
        Price
      </Text>
    ),
    align: "end",
    render: (order) => (
      <Text size="small" color="#6FFFB0">
        {order.rate.toFixed(8)}
      </Text>
    ),
  },
];

const askColumnsMedium = [
  {
    property: "rate",
    header: (
      <Text size="small" weight="bold">
        Price
      </Text>
    ),
    render: (order) => (
      <Text size="small" color="#FD6FFF">
        {order.rate.toFixed(8)}
      </Text>
    ),
  },
  {
    property: "quantity",
    header: (
      <Text size="small" weight="bold">
        Quantity
      </Text>
    ),
    render: (order) => <Text size="small">{order.quantity.toFixed(3)}</Text>,
  },
  {
    property: "total",
    header: <Text weight="bold">Total</Text>,
    render: (order) => <Text size="small">{order.total.toFixed(3)}</Text>,
  },
  {
    property: "aggtotal",
    header: (
      <Text size="small" weight="bold">
        Agg.Total
      </Text>
    ),
    render: (order) => <Text size="small">{order.aggtotal.toFixed(3)}</Text>,
  },
  {
    property: "exchanges",
    header: (
      <Text size="small" weight="bold">
        Exch
      </Text>
    ),
    render: (order) =>
      order.exchanges.map((exchange) => (
        <Text size="small" key={exchange}>
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
