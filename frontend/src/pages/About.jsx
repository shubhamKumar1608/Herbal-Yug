import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.Herbalback}
          alt="about_img"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
           Herbal Yug was born out of a passion for holistic wellness and a commitment to bringing the power of nature into everyday life. Our journey began with a simple vision: to create a platform where individuals can easily discover and experience the benefits of authentic herbal products — all from the comfort of their homes.
          </p>
          <p>
            
Since our inception, we’ve worked with dedication to curate a carefully selected range of herbal and wellness essentials that promote a balanced lifestyle. From natural skincare and immunity boosters to daily wellness solutions, our products are crafted using traditional knowledge, trusted ingredients, and sustainable practices.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>At Herbal Yug, our mission is to empower individuals with natural choices, everyday convenience, and complete confidence in what they use. We strive to deliver a seamless, transparent, and enriching herbal shopping experience — from discovery to doorstep — while staying true to nature’s wisdom and integrity.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            by ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
