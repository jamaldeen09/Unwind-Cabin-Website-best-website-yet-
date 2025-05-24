import React from 'react'
import { thirdSecinfo } from '../../../../util/ItemRender'
import ThirdSecCard from '../components/ThirdSecCard'
import { motion } from "framer-motion";

const bounceIn = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

const SecondSection = () => {
  return (
    <section style={{backgroundColor: "rgb(243, 252, 243)"}} className="min-h-screen
    py-20
    space-y-20
    px-10
    md:px-20
    lg:space-y-10">

        {/* section text */}
        <div
        className="min-h-32 flex flex-col space-y-10 w-full
      midLaptop:text-center
      md:text-center
      lg:text-start"
      >
        <h1
          className="font-bold poppins 
        max-sm: text-2xl 
        sm:text-3xl 
        md:text-4xl
        "
        >
          <span className="">
            Inspiration
          </span>{" "}
          for your next getaway
        </h1>

        <div
          className="flex flex-col gap-4 midLaptop:flex-col 
        lg:flex-row justify-between"
        >
          <p className="poppins">
            We've curated some amazing experiences to help you find your next getaway.
          </p>

          <a
            style={{ textDecoration: "underline" }}
            className="font-bold poppins tracking-wide hover:cursor-pointer"
          >
            View all experiences
          </a>
        </div>
      </div>

      {/* card section */}
      
      <div className="min-h-64 grid gap-10 justify-items-center
midLaptop:grid-cols-1
lg:grid-cols-3">
  {
    thirdSecinfo.map((cardItem, index) => (
      <motion.div
        key={index}
        variants={bounceIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ThirdSecCard
          cardTxt={cardItem.description}
          titleOfCrd={cardItem.title}
          lovelyText={cardItem.lovelyTxt}
          imgUrl={cardItem.url}
        />
      </motion.div>
    ))
  }
</div>

    </section>
  )
}

export default SecondSection