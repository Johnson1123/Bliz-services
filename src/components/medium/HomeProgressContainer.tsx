import { homeProgressData } from "@/constant/data";
import React from "react";
import ProgressBox from "../small/ProgressBox";

export default function HomeProgressContainer() {
  return (
    <div className="mt-10">
      {homeProgressData.map((item, i) => {
        return (
          <ProgressBox
            percentage={item.percentage}
            title={item.label}
            key={i}
          />
        );
      })}
    </div>
  );
}
