import React, { useState, useEffect } from "react";
import Course, { Icourse } from "../components/Course";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Courseslideshow() {
  const courses = [
    {
      id: 1,
      name: "programming",
      image: { filename: "hero-2.png", alt: "programming" },
      card: {
        header: "Web Developer",
        description: "Become a hirable Web developer",
        tag: "best seller",
        price: 10000,
      },
    },
    {
      id: 1,
      name: "programming2",
      image: { filename: "hero-2.png", alt: "programming" },
      card: {
        header: "Web Developer2",
        description: "Become a hirable Web developer",
        tag: "best seller",
        price: 10000,
      },
    },
    {
      id: 1,
      name: "programming3",
      image: { filename: "hero-2.png", alt: "programming" },
      card: {
        header: "Web Developer3",
        description: "Become a hirable Web developer",
        tag: "best seller",
        price: 10000,
      },
    },
  ];
  const [clicked, setClicked] = useState<any>(0);
  const handleClick = (val: any) => {
    setClicked(clicked + val);
  };
  const resetIndex = () => {
    setClicked(0);
  };

  function selectedCourse(val: number = 0): Icourse {
    const tempClicked = val + clicked;
    if (tempClicked === courses.length || tempClicked / -1 === courses.length) {
      resetIndex();
      return courses[tempClicked];
    } else {
      return courses[
        tempClicked < 0 ? courses.length + tempClicked : tempClicked
      ];
    }
  }
  return (
    <div className="py-8">
      <div className=" font-inter mb-6 text-4xl text-center text-gray-700 capitalize font-semibold">
        Choose Your Profession
      </div>
      <div className="flex items-center justify-center text-2xl">
        <div
          data-val={-1}
          onClick={(event) =>
            event.currentTarget.dataset.val &&
            handleClick(parseInt(event.currentTarget.dataset.val))
          }
          className=""
        >
          <FaChevronLeft />
        </div>
        <div className="hidden lg:block w-2/12 mx-6">
          <Course small course={selectedCourse(-1)} />
        </div>
        <div className="mx-12">
          <Course course={selectedCourse()} />
        </div>
        <div className=" hidden lg:block w-2/12 mx-6">
          <Course small course={selectedCourse(1)} />
        </div>
        <div
          data-val={1}
          onClick={(event) =>
            event.currentTarget.dataset.val &&
            handleClick(parseInt(event.currentTarget.dataset.val))
          }
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
}
