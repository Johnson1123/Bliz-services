import React from "react";

function Conatainer({
  children,
  full,
}: {
  children: React.ReactNode;
  full: boolean;
}) {
  return (
    <div className="w-[100vw] py-5">
      <div
        className={`w-[90%] lg:w-[80%] mx-auto border ${full && "w-[100%]"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Conatainer;
