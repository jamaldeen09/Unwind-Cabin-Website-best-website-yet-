import ScrollFadeIn from '../../../../Animations/ScrollFadeIn'

const SeventhSection = () => {
  return (
    <section className="seventhSec min-h-[90vh] flex items-center
    max-sm: px-7
    sm:px-10
    md:px-20">
        <ScrollFadeIn>
        <div className="poppins flex flex-col gap-10 items-start ">
            <h1 className="text-white font-bold tracking-wide 
            verySmall:text-2xl
            max-sm: text-3xl 
            sm:text-4xl 
            md:text-5xl">
                Escape from endless <br /> 
                Zoom calls
            </h1>

            <p className="text-white">
                Discover the wonders of spending time offline and away from the office <br /> 
                with our 3 day weekend getaway cabin retreats
            </p>

            <button className="bg-white text-black px-4 py-3 rounded-md shadow-xl btn">
                Find the perfect gateway
            </button>
        </div>
        </ScrollFadeIn>
    </section>
  )
}

export default SeventhSection