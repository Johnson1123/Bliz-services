import React from "react";
import Transparent from "../small/Buttons/Transparent";
import Secondary from "../small/Buttons/Secondary";
import Link from "next/link";

function HeaderLinkBtnContainer() {
  return (
    <div className="w-full bg-darkBlue lg:col-span-7 lg:row-span-2  md:px-5 lg:px-0 lg:grid grid-cols-7 ">
      <div className="lg:col-span-6 3k:col-span-7 flex justify-between items-center h-full">
        <ul className="flex justify-center items-center gap-4 h-[100%] col-span-3">
          <li>
            <Link href={"/education"} className="link">
              Education
            </Link>
          </li>
          <li>
            <Link href={"/employment"} className="link">
              Employment
            </Link>
          </li>
          <li>
            <Link href={"/contact-us"} className="link">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex gap-5 col-span-2">
          <Transparent text="Get In Touch" url="/contact-us" />
          <Secondary text="Log In" url="/contact-us" />
        </div>
      </div>
    </div>
  );
}

export default HeaderLinkBtnContainer;
