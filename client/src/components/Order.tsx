import { Order, OrderPlaceItem } from "../types/types";

export type Props = {
  order: Order;
};
const Order = ({ order }: Props) => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <div className="mt-4 md:mt-6 flex  flex-col justify-start items-start   w-full ">
          <div>
            <h4 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
              {order.id}
            </h4>
            <h3 className="font-bold">Gift cards</h3>
          </div>
          {order.lineItems &&
            order.lineItems.map((item: OrderPlaceItem) => (
              <div className="bg-gray-300 w-full my-5 p-5 rounded-lg">
                <div className="pb-4 md:pb-8 w-full">
                  <p>{item.cardItemId}</p>
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <a className="text-base xl:text-base font-semibold leading-6 text-gray-800" href={item.claimURL}>
                      {item.claimURL}
                    </a>
                    <div className="flex justify-start items-start gap-2">
                      <span className="text-sm leading-none text-gray-800">
                        <span className="mr-1">{item.currency}</span>{item.value}
                      </span>                      
                    </div>
                    <div className="flex justify-start items-start gap-2">
                      <span className="text-sm leading-none text-gray-800">
                        <span className="mr-1 uppercase font-bold">{item.status}</span>
                      </span>                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Order;
