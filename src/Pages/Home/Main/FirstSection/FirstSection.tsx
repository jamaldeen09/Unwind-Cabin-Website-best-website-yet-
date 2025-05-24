import CardComponent from "../components/CardComponent";
import { cardInformation } from "../../../../util/ItemRender";
import { motion } from "framer-motion";
import ScrollFadeIn from "../../../../Animations/ScrollFadeIn";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FirstSection = () => {
  return (
    <div
      className=" flex flex-col py-20 space-y-20
    max-sm: px-10 sm:px-20
    midLaptop:space-y-20
    lg:space-y-10"
    >
      {/* first section title */}
      <ScrollFadeIn>
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
          <span className="border-b border-white md:border-b-2 border-orange-500">
            Discover
          </span>{" "}
          our idyllic countryside cabins
        </h1>

        <div
          className="flex flex-col gap-4 midLaptop:flex-col 
        lg:flex-row justify-between"
        >
          <p className="poppins">
            Fully equipped kitchen and bathroom with plenty of walking and
            cycling routes to explore
          </p>

          <a
            style={{ textDecoration: "underline" }}
            className="font-bold poppins tracking-wide hover:cursor-pointer"
          >
            View all cabins
          </a>
        </div>
      </div>
      </ScrollFadeIn>
      

      {/* card section */}
      <motion.div
        className="min-h-fit grid w-full justify-items-center gap-10 midLaptop:grid-cols-1 
    lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cardInformation.map((cardItem, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CardComponent
              description={cardItem.cardDescription}
              title={cardItem.cardTitle}
              price={cardItem.cardPrice}
              location={cardItem.cardLocation}
              imageurl={cardItem.cardUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FirstSection;
