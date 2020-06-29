import React from "react";
import ReactModal from "react-modal";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

export default function Modal(props: {
  isOpen: boolean;
  handleIsOpen: () => void;
}) {
  const initialValues = {
    course: "",
    email: "",
  };
  const validationSchema = Yup.object({
    course: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
  });
  const onSubmit = (values: any) => console.log(values);
  return (
    <ReactModal
      onRequestClose={props.handleIsOpen}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      isOpen={props.isOpen}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col items-center">
          <h3 className="font-semibold font-inter text-2xl text-gray-900 text-center">
            We'll email you an exerpt of the course you would like to start!
          </h3>
          <div className="mt-4 flex flex-col w-full px-24">
            <label htmlFor="course" className="text-gray-500">
              Course
            </label>
            <Field
              id="course"
              className="bg-gray-100 text-xl px-4 py-3"
              name="course"
              as="select"
            >
              <option value="tests">tsest</option>
            </Field>
          </div>
          <div className="mt-4 flex flex-col w-full px-24">
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              className="py-3 px-4 text-xl bg-gray-100 w-full"
            />
            <ErrorMessage name="email" />
          </div>
          <div className="mt-6">
            <button
              className="px-4 py-1 rounded-lg text-xl font-bold bg-green-500 text-white uppercase tracking-wide"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </ReactModal>
  );
}
