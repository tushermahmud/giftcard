import axios from "axios";
import { Order } from "../types/types";

export const getCatalogues = async (token: string | null) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    withCredentials: true, // Important for cookies to be sent and received
  };
  const { data } = await axios.get(
    `${
      import.meta.env.VITE_BACKEND_API_URL
    }/catalogue/items?current=1&&rowCount=100&&lang=EN`,
    options
  );
  return data;
};

export const placeOrder = async (token: string | null, order: Order) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };
  const { data } = await axios.post(
    `${import.meta.env.VITE_BACKEND_API_URL}/order/placeOrder`,
    order,
    options
  );
  return data;
};

export const getOrders = async (token: string | null) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };
  const { data } = await axios.get(
    `${import.meta.env.VITE_BACKEND_API_URL}/order/orders`,
    options
  );
  return data;
};
