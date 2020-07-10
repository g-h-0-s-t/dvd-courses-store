import React from "react";
import Course from "../components/Course";
import { useCourseQuery } from "../graphql/types";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { nullCheck } from "../utils";

import { useWindowDimensions } from "../hooks";
export default function CourseSlideshow() {
  const { data, loading } = useCourseQuery();
  const { width } = useWindowDimensions();
  return (
    <div className="bg-gray-100 py-8">
      <div className=" font-inter mb-6 text-4xl text-center text-gray-700 capitalize font-semibold">
        Choose Your Profession
      </div>
      {data && nullCheck(data.courseMany) ? (
        <div id="success">
          <div className="flex items-center justify-center text-2xl">
            <CarouselProvider
              naturalSlideHeight={width > 1000 ? 500 : 350}
              naturalSlideWidth={400}
              totalSlides={data.courseMany.length || 0}
              visibleSlides={width > 1000 ? 3 : 1}
              className="w-full"
            >
              <Slider>
                {data.courseMany.map((course, index) => (
                  <Slide key={index} index={index}>
                    <div className="bg-gray-100 flex justify-center pb-24">
                      <Course course={course} />
                    </div>
                  </Slide>
                ))}
              </Slider>
            </CarouselProvider>
          </div>
          <div className="mx-12 bg-blue-500 text-white text-center font-bold mt-6">
            <a
              className=" py-1 uppercase tracking-wide text-xl"
              href="#viewallcourses"
            >
              View All Courses
            </a>
          </div>
        </div>
      ) : !loading ? (
        <div
          id="error"
          className="text-center bg-white border-l-8 rounded-lg border-red-500 mx-20 lg:mx-64 lg:mt-20 px-12 py-4"
        >
          Something went wrong, please try again later.{" "}
        </div>
      ) : (
        <div className="text-center">Loading</div>
      )}
    </div>
  );
}
