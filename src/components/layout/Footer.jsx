"use client";
import Image from "next/image";
import React from "react";
import IFooter from "../small/Icons/IFooter";
import SocialLinks, { contact, location } from "@/constant/data";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#162c5b] text-white py-8 w-full flex flex-col justify-center lg:h-[50%]">
      <div className="w-[90vw] lg:w-full lg:grid lg:grid-cols-10">
        {/* footer content Section */}
        <div className="flex flex-col items-center lg:col-start-2 lg:col-end-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-6 w-full">
            {/* First Column */}
            <div className="mt-5 w-full md:col-start-1 md:col-end-2 lg:w-max">
              <div className="">
                <Image
                  src="/bliz-service-transparent-logo.png"
                  alt="Bliaz"
                  width={250}
                  height={250}
                />
              </div>

              {/* contact details wrappers */}
              <div className="flex flex-col gap-4 md:gap-3 mt-7 md:mt-5">
                <p className="flex items-center gap-2">
                  <span>
                    <FaEnvelopeOpenText />
                  </span>
                  <span>{contact.email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <MdOutlineLocalPhone />
                  </span>
                  <span>{contact.tel1}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <MdOutlineLocalPhone />
                  </span>
                  <span>{contact.tel2}</span>
                </p>
              </div>

              {/* Social media container */}
              <div className="flex space-x-4 mt-7">
                {SocialLinks.map((item, index) => {
                  return <IFooter {...item} key={index} />;
                })}
              </div>
            </div>

            {/* Second Column */}
            <div className="mt-5 space-y-3 w-full md:col-start-2 md:col-end-3 mx-auto lg:mx-0 lg:w-max">
              <h3 className="md:text-left mt-2">
                Our <span className="text-pink">Locations</span>
              </h3>
              <div className="flex flex-col md:flex-col w-[100%] items-center md:items-start gap-4 md:mt-10">
                <div className="flex gap-4 items-center w-[100%]">
                  <div className="bg-opacity-30 bg-white rounded-full p-2">
                    <MdOutlineLocationOn size={20} />
                  </div>
                  <div className="">
                    <p>{location[0].street}</p>
                    <p>{location[0].state}</p>
                    <p>{location[0].country}</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center w-[100%]">
                  <div className="bg-opacity-30 bg-white rounded-full p-2">
                    <MdOutlineLocationOn size={20} />
                  </div>
                  <div className="w-[100%]">
                    <p>{location[1].street}</p>
                    <p>{location[1].state}</p>
                    <p>{location[1].country}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="mt-5 space-y-3 w-full md:col-start-1 md:col-end-2 mx-auto lg:mx-0 lg:w-max">
              <h3 className="md:text-left mt-2">
                Useful <span className="text-pink">Links</span>
              </h3>
              <ul className="space-y-1 text-gray-300">
                <Link
                  href={"/study-abroad"}
                  className="text-white hover:text-pink cursor-pointer"
                >
                  STUDY ABROAD
                </Link>
                <Link
                  href={"/work-abroad"}
                  className="text-white hover:text-pink cursor-pointer"
                >
                  WORK ABROAD
                </Link>
                <Link
                  href={"/work-abroad"}
                  className="text-white hover:text-pink cursor-pointer"
                >
                  DIGITAL LITERACY
                </Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
      <div className="text-center mt-8 pt-8 lg:mt-3 lg:py-2 border-t border-gray-700">
        <p className="text-gray-400">
          © 2024 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
