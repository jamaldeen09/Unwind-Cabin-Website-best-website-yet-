import React from 'react'
import { starRating } from '../../../util/Icons'
import { starStyles } from '../../../util/ItemRender'
import ScrollFadeIn from '../../../Animations/ScrollFadeIn'

const HeaderBody = () => {
    
  return (
    <div className="min-h-[70vh] hero-section flex items-center px-10 md:px-20">

        {/* Hero Text */}
        <ScrollFadeIn>
        <div className="min-h-[80vh] w-full justify-center
        relative
        flex flex-col space-y-6">
            <h1 className="text-white poppins font-bold tracking-wide 
            text-5xl
            verySmall:text-4xl
            md:text-5xl 
            midLaptop:text-5xl
            lg:text-6xl">
                Leave the office behind <br /> and <span className="txt">unwind</span>
            </h1>

            <h2 className="text-white poppins tracking-wide
            max-sm: text-sm
            sm:text-md
            md:text-lg
            midLaptop:text-md
            lg:text-xl">
                Welcome to our cozy cabin nestled in the heart of the mountains! <br />
                Our cabin is the perfect getaway for those seeking peace and <br />
                relaxation in a natural setting
            </h2>

            <div className="w-full max-w-2xl grid gap-6 pr-20 
            md:grid-cols-2">

                {/* people images */}
                <div className="">
                    <img src="people.png" alt="People Profile Images" />
                </div>

                {/* rating information */}
                <div className="flex items-center space-x-2">
                    <p className="text-green-500">
                      {
                        starRating
                      }
                    </p>
                    <p className="poppins text-white font-bold tracking-wide">
                        Trustpilot
                    </p>
                    {/* ratingcard */}
                    <div className="flex space-x-1">
                        {
                            starStyles.map ((style , index: number) => {
                                return <div key={index} className={`${style.styles}`}> 
                                     {
                                        style.icon
                                     }
                                </div>
                            })
                        }
                    </div>

                    {/* rating */}
                    <p className="poppins font-bold text-white">
                        4.5/5
                    </p>
                </div>
            </div>
        </div>
        </ScrollFadeIn>
    </div>
  )
}

export default HeaderBody