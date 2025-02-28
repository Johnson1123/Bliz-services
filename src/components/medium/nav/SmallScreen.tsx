"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, Close, ArrowDown } from "@/constant/icons";
import Link from "next/link";
import Transparent from "@/components/small/Buttons/Transparent";
function SmallScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
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
              src="/logo.png"
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
            <Menu
              color="white"
              size={35}
              className="font-bold"
              onClick={() => handleOpen()}
            />
            <div className="flex gap-5">
              <Transparent text="Contact Us" url="/contact-us" />
            </div>
          </div>
        </div>

        {/* small screen siderNav */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-[80vw] h-[100vh] bg-white z-10 p-7 px-5">
            <div className="bg-white h-[100%]">
              <div className="flex justify-between items-center">
                <div className="mt-16">
                  <Image
                    src="/image/bliz-services-other.png"
                    alt="Bliaz"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
              {/* ul */}
              <div className="mt-10">
                <ul className=" xl:hidden flex flex-col gap-5 h-[100%]">
                  <li>
                    <Link href={"/"} className="link !text-darkblue">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link href={"/employment"} className="link !text-darkblue">
                      STUDY ABROAD
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"} className="link !text-darkblue">
                      WORK ABROAD
                    </Link>
                  </li>
                  <li
                    className="relative top-0 left-0 flex gap-3 items-center "
                    onClick={() => handleDropdown()}
                  >
                    <p className="link !text-darkblue">DIGITAL LITERACY</p>

                    <ArrowDown
                      className={`cursor-pointer text-darkblue ${
                        dropdown && "rotate-180"
                      }`}
                    />
                    <div
                      className={`absolute left-0 top-[40px] z-10 w-[200px] bg-gray-300 rounded-sm  px-4 py-5 ${
                        dropdown
                          ? "h-[200px] flex transition-all duration-500"
                          : "hidden h-[0]"
                      }`}
                    >
                      <ul className=" xl:hidden flex flex-col gap-3 h-[100%]">
                        <li>
                          <Link href={"/"} className="link !text-darkblue">
                            HOME
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/employment"}
                            className="link !text-darkblue"
                          >
                            STUDY ABROAD
                          </Link>
                        </li>
                        <li>
                          <Link href={"/"} className="link !text-darkblue">
                            HOME
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={"/employment"}
                            className="link !text-darkblue"
                          >
                            STUDY ABROAD
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>

              {/* close */}
              <div
                className="cursor-pointer h-[35px] w-[35px] bg-gray-200 rounded-full flex justify-center items-center absolute top-7 right-7"
                onClick={() => handleOpen()}
              >
                <Close color="black" size={20} className="font-bold" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SmallScreen;
