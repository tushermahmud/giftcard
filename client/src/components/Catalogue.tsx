import { CatalogueItem, Order } from "../types/types";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { formatDate, getRandomRefNo } from "../helpers";
import { placeOrder } from "../apis/api";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
type Props = {
  item: CatalogueItem;
};
const Catalogue = ({ item }: Props) => {
  const { authToken } = useAuth();
  const handlePlaceOrder = async (item: CatalogueItem) => {
    const randomRefNo = getRandomRefNo();
    const formattedDate = formatDate();
    const data: Order = {
      customerName: "John Doe",
      firstName: "John",
      lastName: "Doe",
      referenceNo: `MY-REF-NO-${randomRefNo}`,
      deliveryChannel: "api",
      contactNumber: "+972599409858",
      smsMobileNumber: "+972599409858",
      emailAddress: "techie@munero.net",
      additionalParameters: {},
      countryCode: "AE",
      languageCode: "EN",
      orderDate: formattedDate,
      lineItems: [
        {
          cardItemId: item.id,
          value: 5,
        },
      ],
    };
    try {
      await placeOrder(authToken, data);
      toast.success("Order placed successfully");
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };
  const decodeHtml = (html: string) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
  const decodedContent = decodeHtml(item.giftCardInformation);

  return (
    <div className="max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        src={item.cardFaceImage}
        alt="Article Image"
        className="object-cover w-full h-32 mb-6 rounded-lg sm:h-48 md:h-64 lg:h-64 xl:h-64 2xl:h-64"
      />
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
      </a>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {decodedContent}
        </Markdown>
      </div>
      <button
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#6366F1] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => handlePlaceOrder(item)}
      >
        Place Order
      </button>
    </div>
  );
};

export default Catalogue;
