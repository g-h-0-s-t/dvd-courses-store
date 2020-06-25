import React, { useState, useEffect } from "react";
import Course from "../components/Course";
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
  function selectedCourse() {
    try {
      return courses[clicked < 0 ? courses.length + clicked : clicked];
    } catch (error) {
      resetIndex();
      return courses[clicked];
    }
  }
  return (
    <div className="flex items-center">
      <div
        data-val={-1}
        onClick={(event) =>
          event.currentTarget.dataset.val
            ? handleClick(parseInt(event.currentTarget.dataset.val))
            : ""
        }
        className=""
      >
        <FaChevronLeft />
      </div>
      <div className="mx-12">
        <Course course={() => selectedCourse()} />
      </div>
      <div
        data-val={1}
        onClick={(event) =>
          event.currentTarget.dataset.val
            ? handleClick(parseInt(event.currentTarget.dataset.val))
            : ""
        }
      >
        <FaChevronRight />
      </div>
    </div>
  );
}
