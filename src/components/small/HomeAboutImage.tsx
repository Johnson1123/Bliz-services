import React from "react";

const HomeAboutImage = () => {
  return (
    <div className="w-full md:col-start-1 md:col-end-2 md:row-span-1">
      <div className="landscape:sm:w-[80%]  w-[100%] h-[250px] md:h-full overflow-hidden relative left-0 right-0">
        <div className="w-[700px] xl:w-[900px] h-[250px] md:h-[100%] absolute right-0 top-0">
          <div className="h-full rounded-full">
            <img
              src={"/image.png"}
              alt="about us image"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="w-[700px] xl:w-[900px] h-[250px] md:h-[100%] absolute right-10 top-0 border-4 border-white z-20 rounded-full"></div>
      </div>
    </div>
  );
};

export default HomeAboutImage;
