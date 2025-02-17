import { headerAddress } from "@/constant/data";
import Image from "next/image";
import React from "react";
import HeaderAdrress from "../HeaderAdrress";
import Link from "next/link";
import Transparent from "@/components/small/Buttons/Transparent";
import Secondary from "@/components/small/Buttons/Secondary";
import HeaderSocialMedia from "../HeaderSocialMedia";

function LargeScreen() {
  return (
    <>
      {" "}
      {/* start of large screen header  */}
      <div className="ml-auto w-[95%] h-[150px] hidden lg:grid 3k:grid 3k:grid-cols-2 bg-white">
        {/* */}
        <div className="grid grid-cols-7 h-[100%] lg:grid-cols-4 3k:col-span-4 3k:grid 3k:grid-cols-[minmax(420px,_1fr)_minmax(420px,_1fr)_minmax(420px,_1fr)_10vw] 3k:grid-rows-1">
          {/* logo container */}
          <div className="flex justify-center items-center lg:col-start-1 lg: col-end-2 bg-darkBlue">
            <div className="">
              <Image
                src="/bliz-service-transparent-logo.png"
                alt="Bliaz"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* nav links and address container */}
          <div className="bg-white flex-1 h-[100%] lg:col-start-2 lg:col-end-5 3k:col-start-2 3k:col-end-4">
            {/* Address wrapper */}

            <div className="w-full bg-white h-[50%] flex gap-10 justify-end md:px-5 lg:px-10 relative left-0 right-0 clipy">
              <HeaderSocialMedia />
              {headerAddress.map((item) => (
                <HeaderAdrress
                  key={item.label}
                  Icon={item.Icon}
                  text={item.text}
                  label={item.label}
                />
              ))}
            </div>

            {/* nav links and button container */}
            <div className="w-full bg-darkBlue h-[50%] flex  justify-between md:px-5 lg:px-10 items-center">
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
        </div>
      </div>
      {/* end of large screen header  */}
    </>
  );
}

export default LargeScreen;
