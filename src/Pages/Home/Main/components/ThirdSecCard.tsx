import React from "react";

interface cardProps {
  lovelyText: string;
  titleOfCrd: string;
  cardTxt: string;
  imgUrl: string;
}

const ThirdSecCard = (props: cardProps) => {
  const { lovelyText, titleOfCrd, cardTxt, imgUrl } = props;
  return (
    <div className="w-full poppins cardHover
    sm:max-w-xl 
    midLaptop:max-w-xl 
    lg:max-w-xl">
      <div
        style={{ backgroundImage: `url( ${imgUrl} )` }}
        className={`bg-cover flex justify-end h-[40vh] items-start p-4 w-full`}
      >
      </div>

      {/* card information */}
       <div style={{backgroundColor: "rgba(23, 30, 23, 0.84)"}} className="py-9 px-5 flex flex-col
       space-y-4">
         <div className="flex flex-col space-y-2">
            <h1 className="text-green-200 font-bold tracking-wide text-xs ">
              {
                 lovelyText
              }
            </h1>

            <h1 className="font-bold text-white max-sm: text-lg sm:text-2xl ">
              {
                titleOfCrd
              }
            </h1>
          </div>  

          {/* description */}
          <div>
            <h1 style={{lineHeight: "1.8"}} className="text-white text-md ">
              {
                cardTxt
              }
            </h1>
          </div>
      </div>
    </div>
  );
};

export default ThirdSecCard;
