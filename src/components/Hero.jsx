import React from "react";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Grow in the Market with the Trend
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with the Trend.
        </h1>
        <div className="flex justify-center items-center">
          <div className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast , Flexible , Financing in Market
          </div>
        </div>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
