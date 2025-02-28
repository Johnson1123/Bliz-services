"use client";
import React, { useRef, useState } from "react";

import NavbarBtnGroup from "./nav/NavbarBtnGroup";
import NavbarLinks from "./nav/NavbarLinks";
import { Menu } from "@/constant/icons";
import useClickOutside from "@/hooks/ClickOutside";
import Handburger from "./nav/Handburger";

function HeaderLinkBtnContainer() {
  const [handBur, setHandBur] = useState<boolean>(false);
  const ref = useRef(null);

  useClickOutside(ref, function () {
    setHandBur(false);
  });

  const containerStyle = `w-full bg-white lg:col-span-7 lg:row-span-3  md:px-5 lg:px-0 lg:grid grid-cols-7`;
  const innerContainer = `lg:col-span-6 3k:col-span-7 flex justify-between items-center h-full bg-darkblue lg:pr-10`;

  return (
    <div className={containerStyle}>
      <div className={innerContainer}>
        {/* handburger for only (lg screen)  */}
        <div className="xl:hidden" ref={ref}>
          <Menu
            size={35}
            color="#fff"
            className="cursor-pointer "
            onClick={() => {
              setHandBur(true);
            }}
          />
          <Handburger ref={ref} handBurger={handBur} />
        </div>

        {/* Navbar links (xl screen)*/}
        <NavbarLinks />

        {/* Navbar buttons */}
        <NavbarBtnGroup />
      </div>
    </div>
  );
}

export default HeaderLinkBtnContainer;
