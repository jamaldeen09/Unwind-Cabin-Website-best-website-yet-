import React from 'react'
import { arrowRight } from '../../../../util/Icons'
import ScrollFadeIn from '../../../../Animations/ScrollFadeIn'

const FourtSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center 
    space-y-20 py-20 
    verySmall:space-y-10 py-10
    flex-col
    midIpad:flex-col
    midLaptop:px-4
    lg:flex-row justify-around">

        {/* text container */}

        <ScrollFadeIn>
        <div className="poppins flex flex-col space-y-10 txtHover">
            <h1 className="font-bold 
            iphone14:text-3xl
            verySmall:text-3xl
            max-sm: text-4xl
            sm:text-4xl
            
            md:text-5xl">
                Get ready to unwind
            </h1>

            <div className="flex flex-col space-y-6">
                <p className="iphone14:text-xs verySmall:text-xs md:text-lg">
                    A cabin getaway can be a wonderful way to relax <br />
                    and reconnect with nature. Many cabin rentals are <br />
                    located in beautiful, secluded areas, surrounded <br />
                    by trees and other natural beauty.
                </p>

                <p className="iphone14:text-xs verySmall:text-xs  md:text-lg">
                    A cabin getaway can be a wonderful way to <br />
                    escape the hustle and bustle of daily life and <br />
                    reconnect with nature.
                </p>
            </div>

            <div className="flex items-center space-x-4">
                <h1 className="font-bold">
                    Learn more 
                </h1>
                <p>{arrowRight}</p>
            </div>
        </div>
        </ScrollFadeIn>

        {/* image container */}
        <ScrollFadeIn>
        <div  className="imageHover rounded-xl shadow-2xl green-500 
        max-xs: w-[30vmax]
        max-sm: w-[40vmax] 
        sm:w-[50vmax] 
        lg:w-[40vmax]">
            <img className=" w-full rounded-xl" src="https://images.pexels.com/photos/7205912/pexels-photo-7205912.jpeg?cs=srgb&dl=pexels-cristian-rojas-7205912.jpg&fm=jpg" alt="Man in a black cap" />
        </div>
        </ScrollFadeIn>
    </section>
  )
}

export default FourtSection