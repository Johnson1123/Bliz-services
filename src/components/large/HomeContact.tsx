import React from "react";
import Conatainer from "../layout/Conatainer";
import { homeContacttexts } from "@/constant/data";
import HomeContactBox from "../small/HomeContactBox";

type Props = {};

export default function HomeContact({}: Props) {
  return (
    <Conatainer full={true}>
      <div className="w-full bg-darkBlue py-10 px-3">
        <div className="">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-r from-[rgb(207,42,186)] to-[#09092a] px-5 rounded-full py-2 w-max">
              <p className="text-white">Consultancy Services</p>
            </div>
            <div className="mt-5 w-[90%] ">
              <h2 className="py-1 text-white mr-3 w-[100%] text-center">
                If you have any Question?{" "}
                <span className="text-pink border-b-2 border-pink ml-1">
                  Get In Touch
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-5 mt-10">
              {homeContacttexts.map((item, i) => {
                return <HomeContactBox {...item} />;
              })}
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </Conatainer>
  );
}
