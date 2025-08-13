import React from "react";
import Conatainer from "../layout/Conatainer";
import { splitIntoWords } from "@/helpers/stringUtils";

interface Program {
  title: string;
  text: string[];
}

function Programs({
  data,
  title,
  spanTitle,
  formatBoxTitle,
}: {
  data: Program[];
  title: string;
  spanTitle: string;
  formatBoxTitle: boolean;
}) {
  const numOfItem = data.length;
  return (
    <section className="h-auto py-20 md:min-h-[100vh]  lg:py-0 lg:min-h-[100vh]  xl:py-16 3k:max-h-[800px] flex items-center bg-[#F7F9FF] casesSection-landscape">
      <Conatainer full={false}>
        {" "}
        <h2 className="headingStyle text-center">
          {title} <span className="text-blue">{spanTitle}</span>
        </h2>
        <div className="w-[100%] h-[100%] flex flex-col sm:landscape:flex-row md:flex-row justify-between flex-wrap gap-4 mt-10 md:mt-16">
          {data.map((item: { title: string; text: string[] }, i: number) => {
            return (
              <div
                className={`mx-auto md:mx-0 flex-shrink-0 bg-white py-2 px-4 flex justify-center items-center flex-col gap-4 rounded-[25px] transition-all duration-700 ease-in-out  aspect-square xl:aspect-auto 2xl:aspect-square w-[100%] sm:landscape:w-[48%] md:portrait:w-[48%] md:landscape:w-[48%] xl:landscape:w-[${
                  numOfItem > 2 ? "32%" : "45%"
                }] xl:h-[300px] 2xl:w-full 2xl:h-[400px] even:bg-blue relative`}
                key={i}
              >
                <div className="w-full">
                  {formatBoxTitle ? (
                    <h3
                      className={`h3HeadingStyle text-blue text-center even:!text-white ${
                        (i + 1) % 2 == 0 ? "text-white" : "text-[#323232]/65"
                      }`}
                    >
                      {splitIntoWords(item.title)[0]} <br />
                      {splitIntoWords(item.title)[1]}
                    </h3>
                  ) : (
                    <h3
                      className={`h3HeadingStyle text-blue text-center even:!text-white ${
                        (i + 1) % 2 == 0 ? "text-white" : "text-[#323232]/65"
                      }`}
                    >
                      {item.title}
                    </h3>
                  )}
                </div>
                <div className="mt-7">
                  <ul className="px-5 xl:px-7">
                    {item.text.map((text: string, k: number) => (
                      <li
                        className={`my-1.5 list-disc ${
                          (i + 1) % 2 == 0
                            ? "marker:text-white"
                            : "marker:text-blue-500"
                        }`}
                        key={k}
                      >
                        <p
                          className={`font-secondaryFont font-[500] pTextStyle ${
                            (i + 1) % 2 == 0
                              ? "text-white"
                              : "text-[#323232]/65"
                          }`}
                          key={i}
                        >
                          {text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`absolute h-[50px] w-[50px] xl:h-[60px] xl:w-[60px] 2xl:h-[65px] 2xl:w-[65px] bg-blue rounded-full -bottom-[25px] xl:-bottom-[30px] 2xl:-bottom-[33px] left-[50%] -translate-x-1/2 z-30 ${
                    (i + 1) % 2 == 0 ? "bg-white" : "bg-blue"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </Conatainer>
    </section>
  );
}

export default Programs;
