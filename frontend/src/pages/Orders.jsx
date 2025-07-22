// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";
// import axios from "axios";

// const Orders = () => {
//   const { backendUrl, token, currency } = useContext(ShopContext);

//   const [orderData, setorderData] = useState([]);

//   const loadorderData = async () => {
//     try {
//       if (!token) {
//         return null;
//       }

//       const response = await axios.post(
//         backendUrl + "/api/order/userorders",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         let allOrdersItem = [];
//         response.data.orders.map((order) => {
//           order.items.map((item) => {
//             item["status"] = order.status;
//             item["payment"] = order.payment;
//             item["paymentMethod"] = order.paymentMethod;
//             item["date"] = order.date;
//             allOrdersItem.push(item);
//           });
//         });
//         setorderData(allOrdersItem.reverse());
//       }
//     } catch (error) {}
//   };

//   useEffect(() => {
//     loadorderData();
//   }, [token]);

//   return (
//     <div className="border-t pt-16">
//       <div className="text-2xl">
//         <Title text1={"MY"} text2={"ORDERS"} />
//       </div>

//       <div>
//         {orderData.map((item, index) => (
//           <div
//             key={index}
//             className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
//           >
//             <div className="flex items-start gap-6 text-sm">
//               <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
//               <div>
//                 <p className="sm:text-base font-medium">{item.name}</p>
//                 <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
//                   <p>
//                     {currency}
//                     {item.price}
//                   </p>
//                   <p>Quantity: {item.quantity}</p>
//                   <p>Size: {item.size}</p>
//                 </div>
//                 <p className="mt-1">
//                   Date:{" "}
//                   <span className="text-gray-400">
//                     {new Date(item.date).toDateString()}
//                   </span>
//                 </p>
//                 <p className="mt-1">
//                   Payment:{" "}
//                   <span className="text-gray-400">{item.paymentMethod}</span>
//                 </p>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-between">
//               <div className="flex items-center gap-2">
//                 <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//                 <p className="text-sm md:text-base">{item.status}</p>
//               </div>
//               <button
//                 onClick={loadorderData}
//                 className="border px-4 py-2 text-sm font-medium rounded-sm"
//               >
//                 Tack Order
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrderItems = response.data.orders.flatMap((order) =>
          order.items.map((item) => ({
            ...item,
            status: order.status,
            payment: order.payment,
            paymentMethod: order.paymentMethod,
            date: order.date,
          }))
        );

        setOrderData(allOrderItems.reverse());
      }
    } catch (error) {
      console.error("Failed to load orders:", error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-4">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {orderData.length === 0 ? (
        <p className="text-gray-500 mt-10 text-center">
          You haven't placed any orders yet.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="py-4 px-2 border rounded text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm"
            >
              {/* Left Section: Image + Product Info */}
              <div className="flex items-start gap-6 text-sm flex-1">
                <img
                  className="w-16 sm:w-20"
                  src={
                    Array.isArray(item.image)
                      ? item.image[0]
                      : typeof item.image === "string"
                      ? item.image
                      : "/fallback-image.png" // replace with your fallback image path
                  }
                  alt={item.name || "product image"}
                />
                <div className="flex flex-col gap-1">
                  <p className="sm:text-base font-medium">{item.name || "Product"}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <p>
                      {currency}
                      {item.price ?? "N/A"}
                    </p>
                    <p>Qty: {item.quantity ?? "N/A"}</p>
                    <p>Form: {item.size || "N/A"}</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    Date: {item.date ? new Date(item.date).toDateString() : "N/A"}
                  </p>
                  <p className="text-xs text-gray-500">
                    Payment: {item.paymentMethod || "N/A"}
                  </p>
                </div>
              </div>

              {/* Right Section: Status + Button */}
              <div className="flex justify-between md:w-[250px] items-center text-sm">
                <div className="flex items-center gap-2">
                  <span
                    className={`min-w-2 h-2 rounded-full ${
                      item.status === "Delivered"
                        ? "bg-green-500"
                        : item.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                    }`}
                  ></span>
                  <span>{item.status || "Unknown"}</span>
                </div>
                <button
                  onClick={loadOrderData} // You can replace this with actual tracking logic later
                  className="border px-4 py-2 rounded text-sm hover:bg-gray-100 transition"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
