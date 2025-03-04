import React from "react";
import Conatainer from "../layout/Conatainer";
import bgImg from "../../../public/Image/Circular_bg.png";
import TransparentBlue from "../small/Buttons/TransparentBlue";
import HomeProgressContainer from "../medium/HomeProgressContainer";
import Image from "next/image";

const HomeWhy = () => {
  return (
    <section
      className="py-20 w-full h-auto bg-cover bg-no-repeat bg-left-bottom md:bg-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <Conatainer full={true}>
        <div className=" md:grid grid-cols-2 gap-5 md:gap-10 lg:min-h-[100vh] items-center">
          {/* Description container */}
          <div className="md:order-last">
            {/* tag  */}
            <div className="bg-gradient-to-r from-gray-200 to-gray-100 px-7 rounded-full py-2 w-max">
              <p className="text-blue">WHY WE ARE THE BEST </p>
            </div>
            {/* title */}
            <div className="mt-5 w-[90%] md:w-full xl:w-[80%] md:t-3">
              <h2 className="py-1  text-black ">
                Proven Success,{" "}
                <strong className="text-blue border-b-2 border-blue ml-1">
                  Unmatched Expertise{" "}
                </strong>
                Your Global Dreams!
              </h2>
            </div>
            {/*  text content*/}
            <div className="mt-7 xl:w-[90%]">
              <p className="text-black">
                We make relocating abroad stress-free with expert guidance at
                every step. From visas to settling in, we handle it all
                seamlessly. Start your journey with confidence today!
              </p>
            </div>
            <div className="">
              <HomeProgressContainer />
            </div>
            <div className="mt-10">
              <TransparentBlue url="/" text="Learn More" />
            </div>
          </div>

          {/* Image container */}
          <div className="relative left-0 right-0 hidden md:grid grid-cols-1 grid-rows-9 h-[400px] w-full mt-10 gap-5">
            <div className="row-span-5 col-span-1 relative left-0 right-0 overflow-hidden rounded-lg">
              <Image
                src="/Image/BLIZ 3.png"
                alt=""
                fill
                objectFit="cover overflow-hidden rounded-lg"
              />
            </div>
            <div className="row-span-4 col-span-1  grid grid-cols-2 gap-x-5">
              <div className="relative left-0 right-0 col-span-1 w-full overflow-hidden rounded-lg">
                <Image
                  src="/Image/BLIZ 2.png"
                  alt="image"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="col-span-1 relative left-0 right-0 overflow-hidden rounded-lg">
                <Image
                  src="/Image/BLIZ 3.png"
                  alt="image"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%] h-[100px] w-[100px] overflow-hidden rounded-full">
              <Image
                src="/Image/bliz services-05.png"
                alt="image"
                height={100}
                width={100}
                className=""
              />
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
};

export default HomeWhy;
