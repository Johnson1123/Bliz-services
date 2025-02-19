import React from "react";

function Conatainer({
  children,
  full,
}: {
  children: React.ReactNode;
  full: boolean;
}) {
  return (
    <section className="w-[100vw] py-5 my-5">
      <div className={`w-[90%] lg:w-[80%] mx-auto ${full && "w-[100%]"}`}>
        {children}
      </div>
    </section>
  );
}

export default Conatainer;
