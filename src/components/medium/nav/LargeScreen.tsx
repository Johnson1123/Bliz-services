import Image from "next/image";
import React from "react";
import HeaderLinkBtnContainer from "../HeaderLinkBtnContainer";
import HeaderAddressContainer from "../HeaderAddressContainer";

function LargeScreen() {
  return (
    <>
      {/* start of large screen header  */}
      <div className=" h-[200px] hidden lg:grid w-full">
        {/* */}
        <div className="grid h-[100%] lg:grid-cols-10">
          <div className="col-start-1 col-end-4 h-full grid grid-rows-10 grid-cols-3 logo-bg">
            <div className="flex items-center lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-8">
              <Image
                src="/logo.png"
                alt="Bliaz"
                width={960}
                height={540}
                className="w-[200px]"
              />
            </div>

            <div className="col-start-1 col-end-4 lg:row-start-8 lg:row-end-11 bg-darkblue"></div>
          </div>
          {/* nav links and address container */}
          <div className="bg-white flex-1 h-[100%] lg:col-start-4 lg:col-end-11 3k:col-start-4 3k:col-end-10 lg:grid grid-cols-7 grid-rows-10">
            {/* Address wrapper */}

            <HeaderAddressContainer />

            {/* nav links and button container */}
            <HeaderLinkBtnContainer />
          </div>
        </div>
      </div>
      {/* end of large screen header  */}
    </>
  );
}

export default LargeScreen;
