import React from "react";
import { youtube,instagram,twitter,Linkedin,facebook } from "../../../util/Icons";

const FooterEnd = () => {
    const iconArr = [
        Linkedin,
        twitter,
        facebook,
        instagram,
        youtube
    ]
  return (
    <div className="poppins flex justify-between min-h-32 items-center 
    flex-col
    md:flex-row">
      <h1
        className="font-bold tracking-wide  
        text-white
        text-2xl
        "
      >
        <span className="text-green-200">UNWIND</span>CABINS
      </h1>

      <p className="text-white">
        &copy;
        2023 UndwindCabins
      </p>
      
      <div className="flex text-white items-center space-x-4">
        {
            iconArr.map ((icon, index) => {
                return icon
            })
        }
      </div>
    </div>
  );
};

export default FooterEnd;
