'use client'
import constants from "@/constants"
import { useFormContext } from "@/contexts/FormContext"
import { useState } from "react"

const ExploreSection = () => {
    const [currentIndex, setCurrentIndex] = useState<null | number>(null)
    console.log(currentIndex)
    const { setIsOpen } = useFormContext()
    return (
        <div className="w-full py-20" id="destinations">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-7">
                <div className="font-bold lg:text-6xl text-4xl">Explore Portugal</div>
                <div className="lg:w-2/3 w-full text-center lg:text-2xl text-xl text-gray-500 pb-5">From hidden beaches to mountain villages, discover Portugal&apos;s diverse landscapes and rich cultural heritage</div>
                <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-5 p-5">
                    {constants.exploreSection.map((e, index) => {
                        return (
                            <div
                                key={`Explore-${e.title}`}
                                className={`relative w-full flex flex-col justify-center items-center h-[300px] rounded-xl shadow-xl/30 text-white hover:-translate-y-4 duration-300 ${e.color}`}
                                onMouseEnter={() => setCurrentIndex(index)}
                                onMouseLeave={() => setCurrentIndex(null)}
                            >
                                {e.icon}
                                <div className="font-bold lg:text-2xl text-xl">{e.title}</div>

                                <div className={`absolute w-full h-full bg-black/40 flex justify-center items-center rounded-xl duration-300 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                                    <button className="cursor-pointer w-2/3 bg-white rounded-xl py-5  font-bold " onClick={() => setIsOpen(true)}>
                                        <div className={`${e.color} bg-clip-text text-transparent`}>Explore</div>
                                    </button>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
export default ExploreSection