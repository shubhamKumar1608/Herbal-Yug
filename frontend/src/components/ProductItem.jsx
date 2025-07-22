// import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { Link } from "react-router-dom";

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);

//   return (
//     <div>
//       <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
//         <div className="overflow-hidden">
//           <img
//             className="hover:scale-110 transition ease-in-out"
//             src={image[0]}
//             alt=""
//           />
//         </div>
//         <p className="pt-3 pb-1 text-sm">{name}</p>
//         <p className="text-sm font-medium">
//           {currency}
//           {price}
//         </p>
//       </Link>
//     </div>
//   );
// };

// export default ProductItem;

import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-700 cursor-pointer block group"
      aria-label={`View product ${name}`}
    >
      <div className="overflow-hidden rounded-2xl border border-gray-200">
        <img
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={image[0]}
          alt={name || "Product Image"}
        />
      </div>
      <p className="pt-3 pb-1 text-sm line-clamp-2">{name}</p>
      <p className="text-sm font-semibold text-emerald-700">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;

