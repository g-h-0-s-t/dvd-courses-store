import React from "react";
import heroImage from "../assets/images/hero.png";
import heroImage2 from "../assets/images/hero-3.png";
export default function Hero() {
  return (
    <div className="bg-gray-100">
      <div className="relative px-12 lg:grid lg:grid-cols-2">
        <img className="lg:hidden" src={heroImage} alt="courses" />
        <img
          className="hidden mx-12 lg:block w-full lg:row-start-1 lg:col-start-2 flex justify-center items-middle"
          src={heroImage2}
          alt="courses"
        />
        <div className="lg:col-start-1 flex flex-col items-center justify-center lg:row-start-1 ">
          <div className="absolute top-0 left-0 px-12 py-4 row-start-1 font-bold text-2xl text-gray-900">
            kenty
          </div>
          <div className="font-inter text-4xl text-center text-gray-900 capitalize">
            Start a new career with our masterclass courses
          </div>
          <div className="font-roboto text-center mt-4 text-gray-600 text-2xl text-cster font-se">
            Backed by Leading UK universities but shipped straight to your door.
          </div>
          <div className="mt-12 mb-8 lg:mb-2">
            <a className="px-12 py-4 text-2xl lg:px-4 lg:py-2 lg:text-lg rounded uppercase text-white font-bold bg-blue-500">
              Get a free demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
