"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowDown } from "@/constant/icons";

function NavbarLinks() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <ul className="hidden xl:flex justify-center items-center gap-4 h-[100%] col-span-3">
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
          className={`absolute left-0 top-[40px] z-10 w-[230px] bg-white rounded-sm  px-4 py-5 ${
            dropdown ? "flex transition-all duration-500" : "hidden h-[0]"
          }`}
        >
          <ul className="flex flex-col gap-4 h-[100%] col-span-3">
            <li>
              <Link href={"/"} className="link !text-darkblue">
                COMPUTER LITERACY
              </Link>
            </li>
            <li>
              <Link href={"/employment"} className="link !text-darkblue">
                MICROSOFT OFFICE SUITE
              </Link>
            </li>
            <li>
              <Link href={"/contact-us"} className="link !text-darkblue">
                AI & MACHINE LINEARNING
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

export default NavbarLinks;
