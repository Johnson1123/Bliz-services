"use client";
import React, { useState } from "react";
import Secondary from "../small/Buttons/Secondary";
import Link from "next/link";
import { ArrowDown } from "@/constant/icons";
import Primary from "../small/Buttons/Primary";

function HeaderLinkBtnContainer() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="w-full bg-white lg:col-span-7 lg:row-span-3  md:px-5 lg:px-0 lg:grid grid-cols-7 ">
      <div className="lg:col-span-6 3k:col-span-7 flex justify-between items-center h-full bg-darkblue lg:pr-10">
        <ul className="flex justify-center items-center gap-4 h-[100%] col-span-3">
          <li>
            <Link href={"/"} className="link">
              HOME
            </Link>
          </li>
          <li>
            <Link href={"/employment"} className="link">
              STUDY ABROAD
            </Link>
          </li>
          <li>
            <Link href={"/contact-us"} className="link">
              WORK ABROAD
            </Link>
          </li>
          <li
            className="relative top-0 left-0 flex gap-3 items-center "
            onClick={() => handleDropdown()}
          >
            <p className="link">DIGITAL LITERACY</p>

            <ArrowDown
              color="#fff"
              className={`cursor-pointer ${dropdown && "rotate-180"}`}
            />
            <div
              className={`absolute left-0 top-[40px] z-10 w-[200px] bg-white rounded-xl  px-4 py-5 ${
                dropdown
                  ? "h-[200px] flex transition-all duration-500"
                  : "hidden h-[0]"
              }`}
            ></div>
          </li>
        </ul>

        <div className="flex gap-5 col-span-2">
          <div className="lg:hidden xl:flex">
            <Primary text="Get In Touch" url="/contact-us" />
          </div>
          <Secondary text="Log In" url="/login" icon={false} />
        </div>
      </div>
    </div>
  );
}

export default HeaderLinkBtnContainer;
