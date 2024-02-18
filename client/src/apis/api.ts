import axios from "axios";

export const getCatalogues = async (token:string|null) => {
    console.log(token)
    const options = {
            headers: {
              "Content-Type": "application/json",
              "token": token,
            },
            withCredentials: true, // Important for cookies to be sent and received
    }
  const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/catalogue/items?current=1&&rowCount=100&&lang=EN`, options);
  console.log(data);
  return data;
};

