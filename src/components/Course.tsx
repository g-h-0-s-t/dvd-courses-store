import React, { useState } from "react";
import { CourseDataFragment } from "../graphql/types";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import BuyModal from "../sections/BuyModal";
export default function Course(props: {
  course: CourseDataFragment;
  small?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { name, image, card } = props.course || {};
  const { filename, alt } = image || {};
  const { header, description, tag, price, furtherInformation } = card || {};
  const icons: any = {
    checkmark: (
      <IoMdCheckmarkCircleOutline className="mt-1 mr-1 text-green-500" />
    ),
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="shadow-lg rounded-lg mt-4 "
        src={require(`../assets/images/${filename}`)}
        alt={alt ? alt : ""}
      />
      <div className="mt-4 px-8 pb-6">
        <div className="flex justify-between w-full">
          <h3 className="text-xl text-gray-900 font-bold">{header}</h3>
          {!props.small && tag ? (
            <div className=" flex items-center px-2 text-white uppercase font-bold text-sm rounded-full bg-green-400">
              {tag}
            </div>
          ) : null}
        </div>
        <p className="text-left text-gray-700 whitespace-no-wrap text-lg">
          {!props.small && description}
        </p>
        <p className="mt-4 text-left text-2xl text-green-500 font-bold">
          <span className="text-base text-green-500 abolute top-4">R</span>
          {(price || 0 / 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <span className="ml-2 line-through text-lg text-gray-500">
            {price || 0}
          </span>
        </p>
        {!props.small ? (
          <div className="flex mt-4">
            <div>
              <a
                className="mr-2 px-4 py-1 rounded-lg tracking-wide uppercase font-bold bg-blue-500 text-white text-lg"
                onClick={() => setOpen(true)}
                href="#buy"
              >
                Buy
              </a>
              <BuyModal
                course={props.course}
                isOpen={open}
                handleIsOpen={handleOpen}
              />
            </div>
            <div>
              <a
                className="px-4 py-1 rounded-lg tracking-wide uppercase font-bold bg-gray-300 text-gray-700 text-lg"
                href="#description"
              >
                Description
              </a>
            </div>
          </div>
        ) : null}
        {furtherInformation ? (
          <div className="flex text-sm text-gray-500 mt-4">
            {icons[furtherInformation.icon]}
            <p>{furtherInformation.text}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
