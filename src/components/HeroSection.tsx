'use client'
import { useFormContext } from '@/contexts/FormContext';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExploreIcon from '@mui/icons-material/Explore';
const HeroSection = () => {
    const context = useFormContext()
    const { setIsOpen } = context
    return (
        <div className="flex hero-bg justify-center items-center flex flex-col gap-3">
            <div className="text-white font-bold xl:text-7xl text-5xl text-center">Where Ocean Meets Table</div>
            <div className="text-white font-bolder xl:text-3xl text-xl xl:max-w-1/3 max-w-2/3 text-center">Authentic Portuguese experiences curated by surfing legends and culinary insiders</div>
            <div className="flex md:flex-row flex-col gap-5">
                <button
                    className="flex items-center gap-3 p-5 px-10   bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-lg sm:text-2xl text-xl font-bold shadow-xl hover:opacity-60 duration-300 cursor-pointer"
                >
                    <CalendarMonthIcon />
                    <div onClick={() => setIsOpen(true)}>Start your Journey</div>
                </button>
                <button
                    className="flex items-center gap-3 p-5 px-10  border-2 border-white text-white sm:text-2xl text-xl shadow-sm rounded-lg font-bold shadow-xl hover:opacity-60 duration-300 cursor-pointer"
                >
                    <ExploreIcon />
                    <div>Explore Experiences</div>
                </button>
            </div>
        </div>
    )
}

export default HeroSection