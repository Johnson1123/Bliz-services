import React from "react";
import Rating from "../small/Rating";
import TransparentBlue from "../small/Buttons/TransparentBlue";

const RatingWithBtn = () => {
  return (
    <>
      {/* Rating */}
      <div className="w-full bg-white py-1 mt-2 md:mt-5 rounded-full flex flex-row flex-wrap  gap-3">
        <div className="rounded-xl py-3 flex">
          <TransparentBlue text="Learn More" url="/" />
        </div>
        <div className="flex items-center gap-5 px-3">
          <p className="text-3xl font-bold text-darkblue">4.5</p>
          <div className="">
            <p>Review On</p>
            <Rating rating={4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingWithBtn;
