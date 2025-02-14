import { headerAddress } from "@/constant/data";
import Image from "next/image";
import React from "react";
import HeaderAdrress from "../HeaderAdrress";
import Link from "next/link";
import Transparent from "@/components/small/Buttons/Transparent";
import Secondary from "@/components/small/Buttons/Secondary";

function LargeScreen() {
  return (
    <>
      {" "}
      {/* start of large screen header  */}
      <div className="container ml-auto w-[95%] 4k:w-[90%] h-[150px] hidden lg:block">
        {/* */}
        <div className="grid grid-cols-7 h-[100%]">
          {/* logo container */}
          <div className="flex justify-center items-center col-span-1">
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
          <div className="bg-white flex-1 h-[100%] col-span-6">
            {/* Address wrapper */}

            <div className="w-full bg-white h-[50%] flex gap-10 justify-end md:px-5 lg:px-10 relative left-0 right-0 clipy">
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
