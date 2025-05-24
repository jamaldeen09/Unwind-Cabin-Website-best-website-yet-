import React, { useState } from 'react'
import { heart } from '../../../../util/Icons'
import { starRating } from '../../../../util/Icons'


interface CardProps {
  location: string,
  title: string,
  price: string,
  description: string,
  imageurl: string,
}

const CardComponent = (props: CardProps) => {
  const { location,title,price,description,imageurl } = props

  const stars = [
    {
      icon: starRating,
      styles: "text-green-200"
    },
    {
      icon: starRating,
      styles: "text-green-200"
    },
    {
      icon: starRating,
      styles: "text-green-200"
    },
    {
      icon: starRating,
      styles: "text-green-200"
    },
    {
      icon: starRating,
    },
  ]

  const [ liked,setLiked ] = useState<boolean>(false);

  const handleLiked = () => {
    setLiked((prevLiked) => !prevLiked)
  }
  return (
    <div className={`poppins w-full cardHover 
    sm:max-w-2xl 
    midLaptop:max-w-2xl 
    lg:max-w-xl`}>

      <div style={{backgroundImage: `url( ${imageurl} )`}} className={`bg-cover flex justify-end h-[40vh] items-start p-4 w-full`}>
         <p onClick={handleLiked} className={`transition-all py-2 px-3 rounded-md  hover:cursor-pointer heartIcon ${liked ? "bg-white/10 text-red-600 backdrop-blur-md" : "backdrop-blur-md bg-white/10 text-white"}`}>
           {
            heart
           }
         </p>
      </div>

      {/* card text */}
  
      <div className="cardBg min-h-64">

        <div className="flex flex-col px-4 justify-between min-h-64 py-4">
          <div className="flex flex-col space-y-2">
          <h1 className="text-green-200 font-bold tracking-wide text-xs ">
            {
              location
            }
          </h1>

          <div className="font-bold text-white flex justify-between items-center">
            <h1 className="text-white font-bold max-sm: text-lg sm:text-2xl ">
              {
                title
              }
            </h1>

            <h2 className="text-xl font-bold">
              {
                price
              }
            </h2>
          </div>
          </div>

          <div className="w-full max-w-xl">
             <h1 className="text-white verySmall:text-sm">
              {
                description
              }
             </h1>
          </div>

          <div className="flex items-center space-x-10">
             <div className="flex space-x-2 items-center ">
             {
              stars.map((star, index) => {
                return <p key={index} className={`${star.styles}`}>
                  {star.icon}
                </p>
              })
            }
             </div>
            <p className="text-white">
              82 reviews
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default CardComponent