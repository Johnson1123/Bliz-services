import React from "react";

function CasesBox({
  image,
  name,
  text,
}: {
  image: string;
  name: string;
  text: string;
}) {
  return (
    <div
      className={`relative left-0 top-0 min-h-[300px] md:w-full md:h-auto md:aspect-square xl:aspect-[20/16] shadow-md rounded-lg bg-no-repeat bg-cover bg-center group overflow-hidden transition-all duration-1000`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute left-0 top-0 h-full w-full group-hover:bg-gradient-to-t from-slate-600 via-slate-400 to-slate-100 bg-opacity-40"></div>
      <div className="hidden group-hover:block absolute left-[50%] top-[100%] translate-y-[-100%] translate-x-[-50%] h-[90%] w-[90%] bg-gray-200 bg-opacity-90 rounded-lg"></div>
      <p className=" hidden group-hover:block  text-base font-light bg-white text-darkblue absolute bottom-16 left-5 rounded-full px-5 z-10">
        {text}
      </p>
      <h2 className="hidden group-hover:block  text-lg font-semibold text-darkblue absolute bottom-4 left-5 z-10">
        {name}
      </h2>
    </div>
  );
}

export default CasesBox;
