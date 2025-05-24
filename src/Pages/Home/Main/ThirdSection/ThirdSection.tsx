import React from "react";
import { starStyles } from "../../../../util/ItemRender";
import ScrollFadeIn from "../../../../Animations/ScrollFadeIn";

const ThirdSection = () => {
  return (
    <section
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen bg-[url(https://images.pexels.com/photos/11215792/pexels-photo-11215792.jpeg)]
    flex poppins
    items-center 
    px-10
    md:px-20
    "
    >
      <ScrollFadeIn>
      <div className="w-full  min-h-64 max-w-xl flex flex-col
      gap-10">
        <h1 style={{lineHeight: "1.3"}} className="font-bold text-white tracking-wide 
        max-sm: text-4xl
        sm:text-5xl
        md:text-6xl ">
          A truly wonderful <br />
          experience
        </h1>
        <div className="flex flex-col space-y-6">
          <p className="text-white tracking-wide max-sm: text-sm sm:text-md">
            Brilliant for anyone looking to get away from the hustle and <br />
            bustle of city life or detox from their text for a few days.I <br />
            could have stayed another week!
          </p>

          <p className="text-white tracking-wide max-sm: text-sm sm:text-md">
            They really have thought about everything here down to the <br />{" "}
            finest details.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            {starStyles.map((style, index: number) => {
              return (
                <div key={index} className={`${style.styles}`}>
                  {style.icon}
                </div>
              );
            })}
          </div>
          <p className="text-white font-bold">
            01 Jan 2023
          </p>
        </div>
      </div>
      </ScrollFadeIn>
    </section>
  );
};

export default ThirdSection;
