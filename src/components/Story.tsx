'use client'
import constants from "@/constants";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExploreIcon from '@mui/icons-material/Explore';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useFormContext } from "@/contexts/FormContext";
const Story = () => {
    const { setIsOpen } = useFormContext()
    return (
        <div className="w-full py-20 h-auto" id="ourstory">
            <div className="max-w-7xl flex items-center justify-center lg:flex-row flex-col mx-auto px-4 gap-4">
                <div className="w-full flex flex-col gap-7">

                    <div className="font-bold lg:text-6xl text-4xl">Our Story</div>
                    <div className="w-full lg:text-2xl text-xl text-gray-500">From the waves off Nazaré to the kitchens of Michelin-starred restuarants, we&apos;ve built a network that unlocks Portugal&apos;s hidden trasures</div>
                    {constants.story.map(e => {
                        return (
                            <div className="w-full flex gap-4" key={`Story ${e.title}`}>
                                <div className={`w-10 h-10 rounded-full flex justify-center items-center text-white ${e.color}`}>{e.icon}</div>
                                <div className="w-full flex flex-col gap-2">
                                    <div className="lg:text-xl text-lg font-bold">{e.title}</div>
                                    <div className="lg:text-lg text-base text-gray-500">{e.subText}</div>
                                </div>
                            </div>
                        )
                    })}

                    <div className="w-full flex lg:flex-row flex-col gap-5">
                        <button
                            className="sm:w-1/2 w-full flex items-center gap-3 p-5 justify-center bg-gradient-to-br from-blue-500 to-yellow-500 text-white rounded-lg text-xl font-bold shadow-xl hover:opacity-60 duration-300 cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        >
                            <CalendarMonthIcon />
                            <div >Start your Journey</div>
                        </button>
                        <button
                            className="sm:w-1/2 lg:w-1/3 w-full  flex items-center gap-3 p-5 justify-center border-2 border-yellow-500 text-yellow-500 text-xl shadow-sm rounded-lg font-bold shadow-xl hover:opacity-60 duration-300 cursor-pointer"
                        >
                            <ExploreIcon />
                            <a href="#contact">Get in touch</a>
                        </button>
                    </div>

                </div>

                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full sm:h-[500px] h-[400px] flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-blue-500 to-yellow-500 text-white shadow-xl/30 relative ">
                        <CameraAltIcon sx={{ fontSize: 100 }} />
                        <div className="text-white font-bold">Founder Story Photo</div>
                        <div className="text-white">Surfing + Culinary Expertises</div>
                        <div className="flex flex-col justify-center items-center absolute top-full -translate-y-1/2  right-0 2xl:translate-x-1/2 text-yellow-500 bg-white rounded-full lg:w-35 lg:h-35 w-30 h-30 z-1 text-2xl shadow-xl/30">
                            <div className="font-bold lg:text-xl text-lg">15+</div>
                            <div className="lg:text-xl text-lg">Years</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Story