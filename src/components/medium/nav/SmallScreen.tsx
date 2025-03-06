"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu } from "@/constant/icons";
import Transparent from "@/components/small/Buttons/Transparent";
import Sidebar from "./Sidebar";
import Logo from "../../../assets/images/logo.png";
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
            <Image src={Logo} alt="Bliaz" width={250} height={250} />
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
          <Sidebar
            handleDropdown={handleDropdown}
            handleOpen={handleOpen}
            dropdown={dropdown}
          />
        )}
      </div>
    </>
  );
}

export default SmallScreen;
