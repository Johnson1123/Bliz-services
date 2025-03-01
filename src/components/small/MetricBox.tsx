import React from "react";

type Props = {
  score: number;
  sign: string;
  text: string;
};

const MetricBox = ({ score, sign, text }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 w-[45%] md:w-[20%] ">
      <h2 className="text-[30px] md:text-[40px] text-white">
        {score}
        <span className="text-[30px] ">{sign}</span>
      </h2>
      <p className="text-xs text-white text-center">{text}</p>
    </div>
  );
};

export default MetricBox;
