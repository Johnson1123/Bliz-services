import React from "react";
import MetricBox from "../small/MetricBox";

function MetricsContainer() {
  return (
    <div className="w-full h-auto min-h-[130px] rounded-2xl px-2 md:px-10  py-7  bg-[#020218]  bg-[url('/metric-bg.png')] bg-cover bg-no-repeat bg-center mt-10 flex items-center justify-center">
      <div className="flex flex-wrap  w-[90%] md:w-[100%] gap-y-4 gap-x-2  md:gap-5 lg:gap-4 mx-auto items-center justify-center">
        <MetricBox score={90} text="Visa Approval" sign="%" />
        <MetricBox
          score={1000}
          text="Clients Successfully Relocated"
          sign="+"
        />
        <MetricBox score={150} text="University Partnerships" sign="+" />
        <MetricBox score={98} text="Customer Satisfaction Score" sign="%" />
      </div>
    </div>
  );
}

export default MetricsContainer;
