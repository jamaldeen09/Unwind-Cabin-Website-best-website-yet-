
import { foorterFourthInfo, footerInfo } from "../../../util/ItemRender";
import { footerSecondInfo, footerThirdInfo } from "../../../util/ItemRender";

import FooterSign from "./FooterSign";
import FooterEnd from "./FooterEnd";

const Footer = () => {
  return (
    <footer className="min-h-screen bg-black py-20 flex flex-col gap-20
    max-sm: px-20
    lg:px-40">

      <div className="grid
      verySmall:grid-cols-1
      sm:items-center grid-cols-2
      midLaptop:grid-cols-3 gap-10
      lg:grid-cols-5">
        {footerInfo.map((text, index) => {
          return (
            <div
              key={index}
              style={{ listStyleType: "none" }}
              className="poppins flex flex-col gap-14"
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-green-200 font-bold text-xl">
                  {text.title}
                </h1>

                <div className="flex flex-col text-white gap-2">
                  {text.info.map((information, index) => {
                    return <h2 key={index}>{information}</h2>;
                  })}
                </div>
              </div>

              <div className="flex flex-col text-white gap-2">
                {text.infoSecond?.map((info, index) => {
                  return <h2 key={index}>{info}</h2>;
                })}
              </div>
            </div>
          );
        })}

        {footerSecondInfo.map((secondInfo, index) => {
          return (
            <div key={index} className="poppins flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-green-200 font-bold text-xl">
                  {secondInfo.title}
                </h1>

                <div className="flex flex-col gap-2">
                  {secondInfo.info.map((info, index) => {
                    return (
                      <h2 key={index} className={`${info.styling}`}>
                        {info.txt}
                      </h2>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {secondInfo.info2?.map((info, index) => {
                  return (
                    <h2 key={index} className={`${info.styling}`}>
                      {info.txt}
                    </h2>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="poppins flex flex-col gap-10 ">
          <div className={`poppins flex flex-col gap-2`}>
            {footerThirdInfo.firsPart.map((information, index) => {
              return (
                <>
                  <div key={index} className="">
                    <h2 className={`${information.styles}`}>
                      {information.txt}
                    </h2>
                  </div>
                </>
              );
            })}
          </div>

          <div className="flex flex-col gap-2">
            {footerThirdInfo.secondPart.map((information, index) => {
              return (
                <div key={index} className={`${information.styles}`}>
                  <h2>{information.txt}</h2>
                </div>
              );
            })}
          </div>
        </div>

        <div className="poppins flex flex-col gap-10">
          <h2 className="text-green-200 text-xl">{foorterFourthInfo.title}</h2>

          <div className="flex flex-col gap-2">
            {foorterFourthInfo.info.map((info, index) => {
              return (
                <h2 key={index} className="text-white">
                  {info}
                </h2>
              );
            })}
          </div>
        </div>
      </div>

      <FooterSign />
      <FooterEnd />
    </footer>
  );
};

export default Footer;
