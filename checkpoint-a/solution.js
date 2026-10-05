// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
};

export function myOrders(orders) {
    const myOrders=orders.filter(order => order.city === "Mansoura" && order.status === "pending");
    return myOrders;
};

export function summarize(orders) {
    const quantity=orders.reduce((sum, order) => sum + order.quantity, 0);
    return quantity;
};

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch {
    return `Order ${id} not found`;
  }
}
export function toJsonLines(orders) {
    const myOrders=orders.map(order => ({ item: order.item, quantity: order.quantity }));
    return JSON.stringify(myOrders);
};