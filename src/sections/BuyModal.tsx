import React, { useState } from "react";
import ReactModal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CourseDataFragment } from "../graphql/types";
import Course from "../components/Course";

export default function BuyModal(props: {
  isOpen: boolean;
  handleIsOpen: () => void;
  course: CourseDataFragment;
}) {
  const initialValues = {
    name: "",
    email: "",
    address: {
      firstLine: "",
      secondLine: "",
      postalCode: "",
      city: "",
      county: "",
    },
    course: props.course.name,
    paymentCompleted: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    address: Yup.object({
      firstLine: Yup.string().required("Required"),
      secondLine: Yup.string().required("Required"),
      postalCode: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      county: Yup.string().required("Required"),
    }),
    course: Yup.string().required("Required"),
    paymentCompleted: Yup.boolean().required("Required"),
  });

  const handleSubmit = (values: any) => console.log(values);

  const [formStage, setFormStage] = useState(0);

  const handleFormStage = (stage: number) => {
    setFormStage(stage);
  };
  return (
    <ReactModal onRequestClose={props.handleIsOpen} isOpen={props.isOpen}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {formStage === 0 && (
            <div>
              <div className="flex justify-center">
                <Course small course={props.course} />
              </div>
              <h3 className="mt-8 text-2xl text-gray-900 font-bold font-iter ">
                Contact Information
              </h3>
              <div className="w-8/12 text-gray-700 text-lg font-semibold flex flex-col mt-10">
                <label className="mb-2" htmlFor="name">
                  Name
                </label>
                <Field
                  className="bg-gray-100 py-3 text-xl pl-3"
                  placeholder="John Doe"
                  name="name"
                  as="input"
                ></Field>
                <ErrorMessage
                  className="text-red-500 mt-1 font-normal"
                  name="name"
                  component="div"
                />
              </div>
              <div className="w-8/12 text-gray-700 text-lg font-semibold flex flex-col mt-10">
                <label className="mb-2" htmlFor="email">
                  Email
                </label>
                <Field
                  className=" bg-gray-100 py-3 text-xl pl-3"
                  name="email"
                  placeholder="john@example.com"
                  as="input"
                ></Field>
                <ErrorMessage
                  className="text-red-500 mt-1 font-normal"
                  name="email"
                  component="div"
                />
              </div>
              {
                // Address Section \\
              }
              <h3 className="mt-8 text-2xl text-gray-900 font-bold font-iter ">
                Shipping Address
              </h3>
              <div className="grid grid-cols-2 ">
                <div className="mr-4 text-gray-700 text-lg font-semibold flex flex-col mt-10">
                  <label className="mb-2" htmlFor="address.firstLine">
                    First Line
                  </label>
                  <Field
                    className=" bg-gray-100 py-3 text-xl pl-3"
                    name="address.firstLine"
                    placeholder="21 Cape Rd"
                    as="input"
                  ></Field>
                  <ErrorMessage
                    className="text-red-500 mt-1 font-normal"
                    name="address.firstLine"
                    component="div"
                  />
                </div>
                <div className="ml-4 text-gray-700 text-lg font-semibold flex flex-col mt-10">
                  <label className="mb-2" htmlFor="address.secondLine">
                    Second Line
                  </label>
                  <Field
                    className=" bg-gray-100 py-3 text-xl pl-3"
                    placeholder="Cape Manor"
                    name="address.secondLine"
                    as="input"
                  ></Field>
                  <ErrorMessage
                    className="text-red-500 mt-1 font-normal"
                    name="address.secondLine"
                    component="div"
                  />
                </div>
                <div className="text-gray-700 mr-4 text-lg font-semibold flex flex-col mt-10">
                  <label className="mb-2" htmlFor="address.postalCode">
                    Postal Code
                  </label>
                  <Field
                    placeholder="JH2 CT3"
                    className=" bg-gray-100 py-3 text-xl pl-3"
                    name="address.postalCode"
                    as="input"
                  ></Field>
                  <ErrorMessage
                    className="text-red-500 mt-1 font-normal"
                    name="address.postalCode"
                    component="div"
                  />
                </div>
                <div className="ml-4 text-gray-700 text-lg font-semibold flex flex-col mt-10">
                  <label className="mb-2" htmlFor="address.city">
                    City
                  </label>
                  <Field
                    className=" bg-gray-100 py-3 text-xl pl-3"
                    placeholder="Cape Town"
                    name="address.city"
                    as="input"
                  ></Field>
                  <ErrorMessage
                    className="text-red-500 mt-1 font-normal"
                    name="address.city"
                    component="div"
                  />
                </div>
                <div className="text-gray-700 text-lg font-semibold flex flex-col mt-10">
                  <label className="mb-2" htmlFor="address.county">
                    County
                  </label>
                  <Field
                    className="bg-gray-100 py-3 text-xl pl-3"
                    placeholder="Cape county"
                    name="address.county"
                    as="input"
                  ></Field>
                  <ErrorMessage
                    className="text-red-500 mt-1 font-normal"
                    name="address.county"
                    component="div"
                  />
                </div>
              </div>
            </div>
          )}
          {formStage > 0 ? (
            <button
              type="submit"
              className="mb-8 w-64 py-3 bg-green-500 mt-8 text-center text-2xl text-white font-semibold uppercase tracking-widest"
            >
              <a onClick={() => setFormStage(formStage - 1)} href="#buy">
                Go Back
              </a>
            </button>
          ) : null}
          <button
            type="submit"
            className="mb-8 w-64 py-3 bg-green-500 mt-8 text-center text-2xl text-white font-semibold uppercase tracking-widest"
          >
            <a onClick={() => setFormStage(formStage + 1)} href="#payment">
              Pay
            </a>
          </button>
          {
            // Payment Section \\
          }
        </Form>
      </Formik>
    </ReactModal>
  );
}
