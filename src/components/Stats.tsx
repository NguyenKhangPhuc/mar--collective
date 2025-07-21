const Stat = () => {
    return (
        <div className="w-full py-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-4 grid-cols-2  gap-2">
                <div className="w-full flex flex-col justify-center items-center text-center min-h-[100px]">
                    <div className="lg:text-4xl text-3xl text-blue-600 font-bold ">15+</div>
                    <div className="w-full flex justify-center lg:text-xl text-lg text-gray-500 min-h-1/2">Years Surfing Experience</div>
                </div>
                <div className="w-full flex flex-col justify-center items-center text-center min-h-[100px] ">
                    <div className="lg:text-4xl text-3xl font-bold">50+</div>
                    <div className="w-full flex justify-center lg:text-xl text-lg text-gray-500 min-h-1/2">Culinary Partners</div>
                </div>
                <div className="w-full flex flex-col justify-center items-center text-center min-h-[100px]">
                    <div className="lg:text-4xl text-3xl text-blue-600 font-bold">98%</div>
                    <div className="w-full flex justify-center lg:text-xl text-lg text-gray-500 min-h-1/2">Guest Satisfaction</div>
                </div>
                <div className="w-full flex flex-col justify-center items-center text-center min-h-[100px]">
                    <div className="lg:text-4xl text-3xl font-bold">25+</div>
                    <div className="w-full flex justify-center lg:text-xl text-lg text-gray-500 min-h-1/2">Hidden Destinations</div>
                </div>
            </div>
        </div>
    )
}

export default Stat