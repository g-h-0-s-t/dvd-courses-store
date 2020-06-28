import React from "react";
import "../assets/images/HowItWorks-1.png";

export default function HowItWorks() {
  return (
    <div className="px-12 py-8 text-xl text-gray-600 bg-white text-center">
      <h3 className=" text-gray-700 text-center font-inter text-4xl font-bold ">
        How it Works
      </h3>
      <div className="flex flex-col lg:flex-row lg:justify-between px-12 py-8">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-inter font-semibold text-gray-900 text-2xl ">
            {" "}
            Step 1
          </h3>
          <p>Choose your profession and Order</p>
          <img
            className="w-9/12 lg:w-10/12"
            src={require("../assets/images/HowItWorks-2.png")}
            alt="Chose your profession"
          />
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <h3 className="text-gray-900 text-center font-inter font-semibold text-2xl ">
            Step 2
          </h3>
          <p>Shipped Same day with Royal Mail expidited delivery</p>
          <img
            className="w-12/12"
            src={require("../assets/images/HowItWorks-3.png")}
            alt="Chose your profession"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-gray-900 font-inter font-semibold text-2xl ">
            {" "}
            Step 3
          </h3>
          <p>Become hirable for the chosen profession</p>
          <img
            className="w-9/12 lg:w-10/12"
            src={require("../assets/images/HowItWorks-1.png")}
            alt="Chose your profession"
          />
        </div>
      </div>
    </div>
  );
}
