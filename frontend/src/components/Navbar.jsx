// import React, { useContext, useState } from "react";
// import { assets } from "../assets/assets";
// import { Link, NavLink } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const {
//     setShowSearch,
//     getCartCount,
//     navigate,
//     token,
//     setToken,
//     setCartItems,
//   } = useContext(ShopContext);

//   const logOut = () => {
//     navigate("/login");
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//   };

//   return (
//     <div className="flex items-center justify-between py-5 font-medium">
//       <Link to="/">
//         <img src={assets.logo} className="w-36" alt="logo" />
//       </Link>

//       <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
//         <NavLink to={"/"} className="flex flex-col items-center gap-1">
//           <p>HOME</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink
//           to={"/collection"}
//           className="flex flex-col items-center gap-1"
//         >
//           <p>COLLECTION</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to={"/about"} className="flex flex-col items-center gap-1">
//           <p>ABOUT</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//         <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
//           <p>CONTACT</p>
//           <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
//         </NavLink>
//       </ul>

//       <div className="flex items-center gap-6">
//         <img
//           onClick={() => setShowSearch(true)}
//           src={assets.search_icon}
//           className="w-5 cursor-pointer"
//           alt="search_icon"
//         />

//         <div className="group relative">
//           <img
//             onClick={() => (token ? null : navigate("/login"))}
//             src={assets.profile_icon}
//             className="w-5 cursor-pointer"
//             alt="profile_icon"
//           />

//           {/* Dropdown Menu */}
//           {token && (
//             <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
//               <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
//                 <p className="cursor-pointer hover:text-black">My Profile</p>
//                 <p
//                   onClick={() => navigate("/orders")}
//                   className="cursor-pointer hover:text-black"
//                 >
//                   Orders
//                 </p>
//                 <p onClick={logOut} className="cursor-pointer hover:text-black">
//                   Logout
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//         <Link to="/cart" className="relative">
//           <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart_icon" />
//           <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
//             {getCartCount()}
//           </p>
//         </Link>
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className="w-5 cursor-pointer sm:hidden"
//           alt="menu_icon"
//         />
//       </div>

//       {/* Sidebar menu for small screen */}
//       <div
//         className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
//           visible ? "w-full" : "w-0"
//         }`}
//       >
//         <div className="flex flex-col text-gray-600">
//           <div
//             onClick={() => setVisible(false)}
//             className="flex items-center gap-4 p-3 cursor-pointer"
//           >
//             <img
//               src={assets.dropdown_icon}
//               className="h-4 rotate-180"
//               alt="dropdown_icon"
//             />
//             <p>Back</p>
//           </div>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/"
//           >
//             HOME
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/collection"
//           >
//             COLLECTION
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/about"
//           >
//             ABOUT
//           </NavLink>
//           <NavLink
//             onClick={() => setVisible(false)}
//             className="py-2 pl-6 border"
//             to="/contact"
//           >
//             CONTACT
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/collection", label: "COLLECTION" },
    { to: "/about", label: "ABOUT" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <Link to="/">
        <img src={assets.HerbalYug} className="w-36" alt="logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "font-semibold text-black" : ""
              }`
            }
          >
            <p>{link.label}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search"
        />

        {/* Profile Icon */}
        <div className="group relative">
          <img
            onClick={() => {
              if (!token) navigate("/login");
            }}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="profile"
          />
          {token && (
            <div className="group-hover:block hidden absolute right-0 pt-4 z-10">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logOut} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="cart" />
          {getCartCount() > 0 && (
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          )}
        </Link>

        {/* Hamburger Icon for Mobile */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 z-20 bg-white transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${
          visible ? "w-full sm:w-64" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 border-b cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="back"
            />
            <p>Back</p>
          </div>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              onClick={() => setVisible(false)}
              className="py-3 pl-6 border-b"
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
