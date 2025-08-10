import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.HerbalYug} alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">Herbal Yug is a brand committed to delivering pure, natural, and high-quality herbal products that promote a healthy lifestyle. Inspired by ancient Ayurvedic wisdom and backed by modern science, Herbal Yug has been dedicated to preserving nature’s goodness in every product. From herbal supplements to natural skincare and wellness solutions, our products are carefully crafted to support overall well-being. Over the years, Herbal Yug has become a trusted name for those seeking authenticity, purity, and effectiveness in herbal health solutions. Our mission is to bring nature’s healing power to every home, encouraging a holistic and sustainable way of living.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+250-784-652-570</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ HerbalYug.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
