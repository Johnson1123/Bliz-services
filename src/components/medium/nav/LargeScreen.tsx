import Image from "next/image";
import React from "react";
import HeaderLinkBtnContainer from "../HeaderLinkBtnContainer";
import HeaderAddressContainer from "../HeaderAddressContainer";

function LargeScreen() {
  return (
    <>
      {/* start of large screen header  */}
      <div className=" h-[160px] hidden lg:grid w-full">
        {/* */}
        <div className="grid h-[100%] lg:grid-cols-10">
          <div className="col-start-1 col-end-2 bg-darkBlue"></div>
          {/* logo container */}
          <div className="flex justify-center items-center lg:col-start-2 lg:col-end-4 bg-darkBlue 3k:col-start-2 3k:col-end-4">
            <div className="w-full  ">
              <Image src="" alt="Bliaz" width={100} height={100} />
            </div>
          </div>

          {/* nav links and address container */}
          <div className="bg-white flex-1 h-[100%] lg:col-start-4 lg:col-end-11 3k:col-start-4 3k:col-end-10 lg:grid grid-cols-7 grid-rows-5">
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
