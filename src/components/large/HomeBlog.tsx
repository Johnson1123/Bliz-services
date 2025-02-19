import React from "react";
import Conatainer from "../layout/Conatainer";
import Image from "next/image";
import { Comment, UserCircle } from "@/constant/icons";

type Props = {};

function HomeBlog({}: Props) {
  return (
    <Conatainer full={false}>
      <div className="py-5 mt-5">
        <div className="">
          <div className="">
            {/* section tage */}
            <div className="bg-gray-100 px-5 rounded-full py-2 w-max mx-auto">
              <p className="text-blue">Latest Blog</p>
            </div>

            {/* Section title */}
            <div className="w-[80%] mx-auto mt-5">
              <h2 className="py-1 text-center">
                Our Latest{" "}
                <span className="text-pink border-b-2 border-pink ml-1">
                  Blogs
                </span>{" "}
                and New
              </h2>
            </div>

            <div className="mt-5">
              <div className="relative h-auto w-full">
                <div className="absolute top-5 left-5 w-[60px] h-[70px] bg-white rounded-md">
                  <p className="w-full py-1 bg-pink text-white z-20 rounded-md text-center">
                    24
                  </p>
                  <p className="text-center py-1">May</p>
                </div>
                <div className="relative w-full h-[270px] overflow-hidden -z-10">
                  <Image
                    src={"/image-3.webp"}
                    alt="blog Image"
                    fill
                    objectFit="cover"
                    className="rounded-md hover:scale-125 duration-500"
                  />
                </div>
                <div className="absolute min-h-[120px] w-[85%] bg-gray-200 -bottom-12 rounded-lg rounded-br-none right-0 px-5 py-3">
                  <h3>Attract and retail quality high paying customer</h3>
                  <div className=" flex gap-5 mt-5">
                    <p className="flex gap-2 items-center">
                      <UserCircle className="text-pink" />
                      Admin
                    </p>
                    <p className="flex gap-2 items-center">
                      <Comment className="text-pink" />
                      Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Conatainer>
  );
}

export default HomeBlog;
