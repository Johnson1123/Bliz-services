import React from "react";

function Conatainer({
  children,
  full,
}: {
  children: React.ReactNode;
  full: boolean;
}) {
  return (
    <div className={`w-[90%] lg:w-[80%] xl:w-[70%] mx-auto ${full}`}>
      {children}
    </div>
  );
}

export default Conatainer;
