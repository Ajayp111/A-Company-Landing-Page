import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a]font-bold ">Web Dev HUB Helping Hands</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage your Business
          </h1>
          <p>
            Starting a business is a dream for many aspiring entrepreneurs, but
            finding an idea and launching your endeavor can be challenging. In
            the digital age, selling online — both products and services — can
            present unique, affordable startup options for aspiring
            entrepreneurs. The key is matching your interests, strengths and
            skills to an online business idea that can help fill a need in the
            market and grow into a profitable business.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
