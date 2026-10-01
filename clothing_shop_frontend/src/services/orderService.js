import api from "./api";

export async function createOrder(
  orderData
) {
  const response =
    await api.post(
      "/orders",
      orderData
    );

  return response.data;
}

export async function getOrders() {
  const response =
    await api.get("/orders");

  return response.data;
}

export async function getOrderById(
  id
) {
  const response =
    await api.get(
      `/orders/${id}`
    );

  return response.data;
}