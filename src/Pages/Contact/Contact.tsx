import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { IContact } from "../../Interfaces/ContactUs";
import { GmailIcon, PhoneIcon, Spiner } from "../../Icons";
import { InstaIcon } from "../../Icons/media/media";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { topVarians } from "../../assets/variants/variants";
export default function Contact() {
  let [isLoading, setLoading] = useState<boolean>(false);
  let initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  let validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "MinLength is 3 charcters"),
    email: Yup.string()
      .required("Email is required")
      .email("Enter Valid Email"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^01[0125][0-9]{8}$/, "Enter Valid Phone"),
    message: Yup.string().required("Message is required"),
  });
  let sendEmail = (values: IContact) => {
    console.log(values);
    setLoading(true);
    emailjs
      .send(
        "service_vvx1k04",
        "template_594uk6k",
        {
          ...values,
          subject: "Support",
        },
        "85tK85GLHDCOQVZuc"
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank you to contact us");
      })
      .catch((error) => {
        setLoading(false);

        toast.error("Faild please try again");
        console.log(error);
      });
  };
  let contactData = [
    {
      icon: <InstaIcon className="w-10 h-8 text-main" />,
      data: "@dunkineg",
      description: "Contact with us from instagram",
    },
    {
      icon: <PhoneIcon className="w-10 h-8" />,
      data: "0224040380",
      description: "Contact with Hotline / Delivery",
    },
    {
      icon: <GmailIcon className="w-10 h-8" />,
      data: "info@dunkindonutseg.com",
      description: "send email for all your questions",
    },
  ];

  let formik = useFormik<IContact>({
    initialValues,
    onSubmit: sendEmail,
    validationSchema,
  });
  return (
    <>
      <Helmet>
        <title>Contact Us | Dunkin'</title>
        <meta name="description" content="Contact Dunkin Donuts Dun " />
      </Helmet>
      <Toaster position="top-center" />
      <section className="w-[80%] mx-auto py-28">
        {/* header */}
        <motion.div
          variants={topVarians}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="head text-center space-y-3"
        >
          <h1>Get In Touch</h1>
        </motion.div>
        {/* contact  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 my-8">
          {contactData.map((item, i) => {
            return (
              <motion.div
                variants={topVarians}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i*0.3 }}
                key={i}
                className="bg-gray-50 dark:bg-slate-900 flex flex-col items-center space-y-4 rounded-lg shadow-lg p-3"
              >
                <div>{item.icon}</div>
                <h3>{item.data}</h3>
                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
        {/* contactform */}
        <motion.div
          variants={topVarians}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1 }}
          className="my-8 bg-gray-50 dark:bg-slate-900 rounded-lg shadow-lg  p-8 "
        >
          {/* Title */}
          <h2 className=" text-5xl text-center mt-7 ">Send Us</h2>
          {/* Line */}
          <hr className=" my-3 " />
          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full bg-gray-200 dark:bg-gray-700 p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-main"
                />
                {formik.errors.name && formik.touched.name ? (
                  <p className="text-red-600 ">{formik.errors.name}</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label className=" mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full bg-gray-200 dark:bg-gray-700 p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-main"
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-600 ">{formik.errors.email}</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className=" mb-1">Phone number</label>
              <input
                type="text"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-gray-200 dark:bg-gray-700 p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-main"
              />
              {formik.errors.phone && formik.touched.phone ? (
                <p className="text-red-600">{formik.errors.phone}</p>
              ) : (
                ""
              )}
            </div>

            {/* Message */}
            <div>
              <label className="mb-1">Your message</label>
              <textarea
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-gray-200 dark:bg-gray-700 p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-main"
              ></textarea>
              {formik.errors.message && formik.touched.message ? (
                <p className="text-red-600">{formik.errors.message}</p>
              ) : (
                ""
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-main hover:bg-orange-500 text-white px-4 py-2 rounded-md transition disabled:bg-disabled"
            >
              {isLoading ? (
                <span className=" flex space-x-1 ">
                  <Spiner className="w-4 text-white" /> <span>Sending...</span>
                </span>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
}
