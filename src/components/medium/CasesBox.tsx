import React from "react";

function CasesBox() {
  return (
    <div>
      <div className="relative left-0 top-0 min-h-[300px] shadow-md rounded-lg   bg-[url('/graduation.avif')] bg-no-repeat bg-cover bg-center group overflow-hidden transition-all duration-1000">
        <div className="absolute left-0 top-0 h-full w-full group-hover:bg-gradient-to-t from-slate-600 via-slate-400 to-slate-100 bg-opacity-40"></div>
        <div className="hidden group-hover:block absolute left-[50%] top-[100%] translate-y-[-100%] translate-x-[-50%] h-[90%] w-[90%] bg-gray-200 bg-opacity-90 rounded-lg"></div>
        <p className=" hidden group-hover:block  text-base font-light bg-white text-pink absolute bottom-16 left-5 rounded-full px-5 z-10">
          Relocation
        </p>
        <h2 className="hidden group-hover:block  text-lg font-semibold text-darkblue absolute bottom-4 left-5 z-10">
          John Ohkafor
        </h2>
      </div>
    </div>
  );
}

export default CasesBox;
