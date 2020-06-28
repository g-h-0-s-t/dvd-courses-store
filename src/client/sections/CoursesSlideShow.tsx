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
      name: "editing",
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
      name: "music",
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
    let tempClicked = val + clicked;
    console.log(tempClicked);
    if (tempClicked === courses.length || tempClicked / -1 === courses.length) {
      val === 0 && resetIndex();
      tempClicked = val === 0 ? val + clicked : val + 0;
      return courses[
        tempClicked < 0 ? courses.length + tempClicked : tempClicked
      ];
    } else {
      return courses[
        tempClicked < 0 ? courses.length + tempClicked : tempClicked
      ];
    }
  }
  return (
    <div className="bg-gray-100 py-8">
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
          <Course course={selectedCourse(0)} />
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
      <div className="mx-12 bg-blue-500 text-white text-center font-bold mt-6">
        <a className=" py-1 uppercase tracking-wide text-xl" href="#">
          View All Courses
        </a>
      </div>
    </div>
  );
}
