import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want Developers Or Any Service to your Business or StartUp.....
          </h1>
          <p className=""> Contact us and make Everything fine </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-balk rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Contact us
            </button>
          </div>
        </div>
        <p>
          {" "}
          we can make your work more efficient and give the best output.{" "}
          <span className="text-[#00df9a]">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
