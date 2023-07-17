import React, { useEffect } from "react";
import Lottie from "react-lottie";
import { useForm } from "react-hook-form";
import { HiUserCircle, HiMail, HiOutlinePencilAlt } from 'react-icons/hi';
import { AiOutlineLoading } from 'react-icons/ai';
import { IoIosSend } from 'react-icons/io';
import mailBox from "../lottieFile/contact_us_lottieFile.json"

import AOS from "aos";
import "aos/dist/aos.css";



function ContactUs() {

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: mailBox,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

useEffect(() => {
  AOS.init({
    duration: 2000,
    offset: 200,
  });
  AOS.refresh();
}, []);

const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
  watch,
} = useForm();

const onSubmit = async (data) => {
  console.log(data);
  // Send form data to backend or API
  // Show success message
  reset();
};

const loading = watch("loading");

return (
  <>
        <section class="bg-white border-b py-8" id="services">
        <div class="container max-w-5xl mx-auto m-8">
          <div class="flex flex-wrap flex-col sm:flex-row" data-aos="fade-up">
            <div class="w-full sm:w-1/2 p-6">
              <div class="text-gray-600 mb-8 text-justify">
                <h1 className="text-4xl font-bold leading-none sm:text-4xl text-purple-header">
                  READY <br />
                  <span className="text-cl_blue-4"> FOR </span>
                  PARTNERSHIP?
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 text-purple-body">
                  Email to partner on consulting projects or other partnerships
                  including speaking engagement, community projects, research
                  projects, etc.
                </p>
              </div>


              <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 mx-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiUserCircle className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className={`${
                errors.name ? "border-red-500" : ""
              } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-purple`}
              type="text"
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">Name is required</p>
          )}
        </div>
        <div className="mb-4 mx-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className={`${
                errors.email ? "border-red-500" : ""
              } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-purple`}
              type="email"
              placeholder="johndoe@example.com"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Invalid email address</p>
          )}
        </div>
        <div className="mb-4 mx-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
              <HiOutlinePencilAlt className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              className={`${errors.message ? "border-red-500" : ""} appearance-none border
              rounded-lg w-full py-2 px-3 pl-10
              text-gray-700 leading-tight focus:outline-none focus:border-purple`}
              placeholder="Write your message here"
              rows="6"
              {...register("message", { required: true })}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">Message is required</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`${
              loading ? "cl_blue-4 cursor-not-allowed" : "cl_blue-4 transform hover:scale-110 transition-transform duration-300"
            } text-white font-bold py-2 px-4 rounded-lg flex items-center focus:outline-none`}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="mr-2">Loading</span>
                <AiOutlineLoading className="animate-spin h-5 w-5 text-white" />
              </>
            ) : (
              <>
                <span>Submit</span>
                <IoIosSend className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
        <input type="hidden" value={loading} {...register("loading")} />
      </form>

              {/* <div
                className="flex space-y-4 sm:items-center
                sm:flex-row sm:space-y-0
                sm:space-x-4 lg:justify-start md:items-center"
              >
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-4 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-14 h-14" src={insta} alt="image" />
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-4 py-2 flex justify-center
                  transform hover:scale-110 transition-transform duration-300"
                >
                  <img class="w-14 h-14 " src={linkedIn} alt="image" />
                </a>
              </div> */}
            </div>

            <div class="w-full sm:w-1/2 p-6 sm:order-first">
              <Lottie options={animationOptions} height={350} width={350} />
            </div>
          </div>
        </div>
      </section>
  </>
);
}

export default ContactUs;
