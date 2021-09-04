"use strict";

const uuidv1 = require("uuid/v1");

const createOrder = (body) => {
  const { name, address, productId, quantity } = body;
  const order = {
    orderId: uuidv1(),
    name,
    address,
    productId,
    quantity,
    orderDate: Date.now(),
    eventType: "order_placed",
  };

  return order;
};

const placeNewOrder = (order) => {};

module.exports = { createOrder, placeNewOrder };
