import Image from "next/image";
import Conatainer from "../layout/Conatainer";
import Primary from "../small/Buttons/Primary";
import bannerImg from "@/assets/images/new/services-banner.jpg";
import { bannerDataI } from "@/constant/types";

function EducationQuoteBanner({
  quote,
  text,
  author,
  link,
  center,
  image,
}: bannerDataI) {
  return (
    <section className="relative h-[calc(100vh_-_100px)] 3k:h-[50vh] lg:h-[calc(100vh_-_200px)] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={image ? image : bannerImg}
        alt="Education background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a193a]/70" />
      {/* Bottom-to-top gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full grid place-items-center text-center">
        <Conatainer full={false}>
          <div className="flex flex-col items-center gap-6 md:gap-8 w-[95%] mx-auto">
            <h3 className="text-white font-optima font-semibold leading-tight w-[60%]">
              {quote}
            </h3>

            {author && (
              <p className="text-white font-optima font-semibold medium-title">
                {author}
              </p>
            )}

            <div className="mx-auto">
              <p
                className={`max-w-2xl text-white text ${
                  center ? "text-center" : "text-left"
                }`}
              >
                {text}
              </p>

              <div
                className={`mt-7 flex ${
                  center ? "justify-center" : "justify-start"
                }`}
              >
                <Primary url={link} text="CONTACT US" />
              </div>
            </div>
          </div>
        </Conatainer>
      </div>
    </section>
  );
}

export default EducationQuoteBanner;
