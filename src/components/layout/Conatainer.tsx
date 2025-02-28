import React from "react";

function Conatainer({
  children,
  full,
}: {
  children: React.ReactNode;
  full: boolean;
}) {
  return (
    <div
      className={`w-[90%] md:w-[80%] lg:w-[65%] 3k:w-[60%] mx-auto ${full} `}
    >
      {children}
    </div>
  );
}

export default Conatainer;
