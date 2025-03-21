import React from "react";
import Conatainer from "../layout/Conatainer";
import BlogSlider from "../medium/slider/BlogSlider";

function HomeBlog() {
  return (
    <section className="py-16">
      <Conatainer full={false}>
        <div className="py-5 mt-5">
          <div className="">
            <div className="">
              {/* section tage */}
              <div className="bg-gray-100 px-5 rounded-full py-2 w-max mx-auto">
                <p className="text-blue">Latest Blog</p>
              </div>

              {/* Section title */}
              <div className="w-[80%] mx-auto mt-5">
                <h2 className="py-1 text-center">
                  Our <span className="text-blue">Latest Blogs</span> & New
                </h2>
              </div>

              <div className="w-full mt-10">
                <BlogSlider />
              </div>
            </div>
          </div>
        </div>
      </Conatainer>
    </section>
  );
}

export default HomeBlog;
