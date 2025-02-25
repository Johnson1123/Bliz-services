import React from "react";
import Rating from "../small/Rating";
import TransparentBlue from "../small/Buttons/TransparentBlue";

const RatingWithBtn = () => {
  return (
    <>
      {/* Rating */}
      <div className="bg-white py-1 mt-5 rounded-full flex flex-col md:flex-row gap-3 w-max">
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
