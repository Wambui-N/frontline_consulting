"use client";

import React, { use } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function page() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    // Validation
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h3 className="text-orange font-regular text-center text-2xl">
        Contact Us
      </h3>
      <div className="flex">
        <div className="w-full flex items-center justify-center">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-full gap-3"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className={`${
                  formik.touched.name && formik.errors.name ? "text-orange" : ""
                }`}
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-[1px] outline-none border-black/25 rounded-md p-1 bg-transparent focus:border-orange/70"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className={`${
                  formik.touched.email && formik.errors.email ? "text-orange" : ""
                }`}
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-[1px] outline-none border-black/25 rounded-md p-1 bg-transparent focus:border-orange/70"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="message"
                className={`${
                  formik.touched.message && formik.errors.message ? "text-orange" : ""
                }`}
              >
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border-[1px] outline-none border-black/25 rounded-md p-1 bg-transparent focus:border-orange/70"
              ></textarea>
            </div>
            <button
              type="submit"
              className="my-2 px-4 py-1 rounded-full border-[1px] border-orange bg-orange hover:bg-transparent text-white font-semibold hover:text-orange transition-all ease-in-out duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
