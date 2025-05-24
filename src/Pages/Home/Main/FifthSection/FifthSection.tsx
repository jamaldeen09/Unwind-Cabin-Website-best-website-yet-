const FifthSection = () => {
  return (
    <section style={{backgroundColor: "rgb(243, 252, 243)"}} 
    className="min-h-[90vh] flex justify-center items-center">

        <div style={{backgroundImage: "url(https://images.unsplash.com/photo-1658279366796-e0c28623cd27?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBsb29raW5nJTIwb3V0JTIwd2luZG93fGVufDB8fDB8fHww)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}} 
        className="w-full flex items-center 
        max-sm: px-4
        sm:max-w-[90vw] px-10
        md:px-20 max-w-[90vw] min-h-[70vh]
        lg:min-h-[80vh]">

            <div className="poppins flex flex-col space-y-10 items-start
            ">
                <h1 style={{lineHeight: "1.3"}} className="text-white font-bold 
                verySmall:text-2xl
                max-sm: text-3xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                ">
                    Nourish the mind, body,<br />
                    and spirit.
                </h1>

                <div className="flex flex-col space-y-6 items-start">
                <p className="text-white text-md verySmall:text-sm">
                    Many people find that the combination of being in a peaceful natural <br />
                    setting and engaging in activities that nourish the mind, body, and spirit <br />
                    leave them feeling rejuvenated and refreshed
                </p>

                <button className="bg-orange-400 text-black px-5 py-4 shadow-2xl btnHover rounded-md">
                    Find available courses
                </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FifthSection