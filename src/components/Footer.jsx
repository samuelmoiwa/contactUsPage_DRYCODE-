/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import logo from "../icons/mail_moiwa_logo.png";

function Footer() {
  return (
    <footer className="bg-cl_blue-1 py-8 flex-shrink-0">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="h-10 w-48 mr-2" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4">
          <div className="md:mr-8">
            <h4 className="text-gray-800 uppercase font-semibold">
              Contact Us
            </h4>
            <p className="text-gray-600 mt-2">
              Address: Hamilton, Freetown, Sierra Leone
            </p>
            <a href="tel:+23278867291 " className="text-gray-600 mt-1">
              Phone: +232 78867291
            </a>
            <br />
            <a
              href="mailto:info@wattataxisl.com"
              className="text-gray-600 mt-1"
            >
              Email: samuelmoiwa@gmail.com
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <h4 className="text-gray-800 uppercase font-semibold">
              Social Media
            </h4>
            <div className="flex mt-2">
              <a
                href="https://www.facebook.com/samuel.moiwa"
                target="_blank"
                rel="Facebook noreferrer"
                className="text-gray-400 hover:text-gray-800 mr-3"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/samuelmoiwa/"
                target="_blank"
                rel="LinkedIn noreferrer"
                className="text-gray-400 hover:text-gray-800"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        <div className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mail Moiwa. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
