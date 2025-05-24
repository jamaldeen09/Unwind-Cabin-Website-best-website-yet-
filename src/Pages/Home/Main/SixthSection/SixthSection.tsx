import { useState } from "react";
import { freqAsked } from "../../../../util/ItemRender";
import FreqAsked from "./componentsSixth/FreqAsked";

const SixthSection = () => {
    const [ asked,setAsked ] = useState<string[]>([
        "About our cabins",
        "Tell me about the cabin",
        "Pets, family & friends",
    ])
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 gap-20 
    max-sm: px-10
    sm:px-24
    md:px-40
    midLaptop:px-20
    midIpad:px-10
    lg:px-40">
      {/* first container */}
        <div className="">
            <h1 style={{fontWeight: "900"}} className="tracking-wide 
            verySmall:text-3xl 
            max-sm: text-3xl
            sm:text-4xl ">Frequently asked questions</h1>
        </div>
      <div className="flex justify-between
      max-sm: flex-col gap-20 
      sm:flex-col gap-20
      lg:flex-row">
        {/* main content */}
        
        <div className="flex flex-col poppins space-y-14 px-4 sm:px-0">
          
          {freqAsked.map((question, index) => {
            return (
              <div className="flex flex-col space-y-4 ">
                <h1  className="font-bold verySmall:text-md sm:text-xl ">
                  <span>{index + 1}.</span> {question.title}
                </h1>
                <div style={{fontWeight: "200"}}>
                  <li className="verySmall:text-xs sm:text-md">{question.item1}</li>

                  <li className="verySmall:text-xs sm:text-md">{question.item2}</li>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col space-y-14 w-full
        midIpad:max-w-lg
        midLaptop:max-w-md
        lg:mx-0 max-w-2xl">
            {
                asked.map ((askedQuest, index) => {
                    return <FreqAsked key={ index } textInfo={askedQuest}/>
                })
            }
        </div>
      </div>

      {/* second container */}
      <div className="flex flex-col space-y-4 poppins">
        <h1 style={{fontWeight: "800"}} className="verySmall:text-xl sm:text-2xl">
            Still have a question?
        </h1>

        <p className="verySmall:text-sm sm:text-md">
            If you still have questions contact a member of the team on <span style={{textDecoration: "underline",fontWeight: "900"}}>live chat</span> and we'd be more than happy to help.
        </p>
      </div>
    </section>
  );
};

export default SixthSection;
