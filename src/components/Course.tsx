import React, { useState, useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
interface Icourse {
  course: {
    name: string;
    image: { filename: string; alt: string };
    card: { header: string; description: string; price: number; tag: string };
  };
}
export default function Course(props: Icourse) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="shadow-lg rounded-lg mt-4 "
        src={require(`../assets/images/${props.course.image.filename}`)}
        alt={props.course.image.alt}
      />
      <div className="mt-4 px-8 pb-6">
        <div className="flex justify-between w-full">
          <h3 className="text-xl text-gray-900 font-bold">
            {props.course.card.header}
          </h3>
          <div className=" flex items-center px-2 text-white uppercase font-bold text-sm rounded-full bg-green-400">
            {props.course.card.tag}
          </div>
        </div>
        <p className="text-gray-700 whitespace-no-wrap text-lg">
          {props.course.card.description}
        </p>
        <p className="mt-4 text-left text-2xl text-green-500 font-bold">
          <span className="text-base text-green-500 abolute top-4">R</span>
          {(props.course.card.price / 10)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <span className="ml-2 line-through text-lg text-gray-500">
            {props.course.card.price}
          </span>
        </p>
        <div className="flex mt-4">
          <div>
            <a className="mr-2 px-4 py-1 rounded-lg tracking-wide uppercase font-bold bg-blue-500 text-white">
              Buy
            </a>
          </div>
          <div>
            <a className="px-4 py-1 rounded-lg tracking-wide uppercase font-bold bg-gray-300 text-gray-700">
              Description
            </a>
          </div>
        </div>
        <div className="flex text-sm text-gray-500 mt-4">
          <IoMdCheckmarkCircleOutline className="mt-1 mr-2 text-green-500" />
          <p>Resla Agency Job Guarantee</p>
        </div>
      </div>
    </div>
  );
}
export Icourse