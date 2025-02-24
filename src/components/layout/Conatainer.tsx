import React from "react";

function Conatainer({
  children,
  full,
}: {
  children: React.ReactNode;
  full: boolean;
}) {
  return (
    <div className={`w-[90%] lg:w-[80%] mx-auto ${full && "w-[100%]"}`}>
      {children}
    </div>
  );
}

export default Conatainer;
