import React from "react";

function Conatainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[100vw] py-5">
      <div className="w-[90%] lg:w-[80%] mx-auto border">{children}</div>
    </div>
  );
}

export default Conatainer;
