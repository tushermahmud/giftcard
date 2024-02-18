import { useEffect, useState } from "react";
import { getOrders } from "../apis/api";
import useAuth from "../hooks/useAuth";
import { Order as OrderType } from "../types/types";
import { toast } from "react-toastify";
import Order from "../components/Order";

const Catalogues: React.FC = () => {
  const [orders, setOrders] = useState<OrderType[] | null>(null);
  const { authToken } = useAuth();
  useEffect(()=>{
    getOrders(authToken).then((data)=>{
        setOrders(data.orders)
    }).catch((error)=>{
      toast.error(error.message)
    })
  },[authToken])
  return (
    <div className="grid grid-cols-1 gap-4 mx-4 my-10">
      {orders && orders.map((order: OrderType)=>{
        return <Order key={order.id} order={order}/>
      })}
    </div>
  );
};

export default Catalogues ;
