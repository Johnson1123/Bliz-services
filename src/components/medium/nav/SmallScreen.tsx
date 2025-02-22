"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiBars3BottomLeft, IoMdClose } from "@/constant/icons";
import Link from "next/link";
import Transparent from "@/components/small/Buttons/Transparent";
function SmallScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* start of small screen header  */}
      <div className=" mx-auto h-auto bg-transparent header__logo-bg relative left-0 top-0 lg:hidden ">
        {/* Logo wrapper */}
        <div className="w-[95vw] lg:w-[95vw]  h-[100px] mx-auto flex justify-center items-center border-b border-white">
          {/* small screen modal logo wrapper */}
          <div className="grid place-items-center">
            <Image
              src="/Image/bliz_services-10.png"
              alt="Bliaz"
              width={250}
              height={250}
              objectFit="cover"
            />
          </div>
        </div>

        {/* siderNav control button */}
        <div className=" w-full h-[70px] bg-darkBlue">
          <div className="w-[90vw] md:w-[90vw] mx-auto flex items-center h-[100%] justify-between">
            <HiBars3BottomLeft
              color="white"
              size={35}
              className="font-bold"
              onClick={() => handleOpen()}
            />
            <div className="flex gap-5">
              <Transparent text="Get In Touch" url="/contact-us" />
            </div>
          </div>
        </div>

        {/* small screen siderNav */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-[80vw] h-[100vh] bg-white z-10 p-7 px-2">
            <div className="bg-white h-[100%]">
              <div className="flex justify-between items-center">
                <div className="">
                  <Image
                    src="/bliz-service-logo-white-bg.png"
                    alt="Bliaz"
                    width={150}
                    height={150}
                  />
                </div>
                <div
                  className="cursor-pointer h-[35px] w-[35px] bg-gray-200 rounded-full flex justify-center items-center"
                  onClick={() => handleOpen()}
                >
                  <IoMdClose color="black" size={20} className="font-bold" />
                </div>
              </div>
              {/* ul */}
              <div className="mt-10">
                <ul className="flex flex-col gap-4">
                  <Link href="/education" className="text">
                    Education
                  </Link>
                  <Link href="/education">Employment</Link>
                  <Link href="/education">Contact</Link>
                </ul>
              </div>
            </div>
            <div className=""></div>
          </div>
        )}
      </div>
    </>
  );
}

export default SmallScreen;
