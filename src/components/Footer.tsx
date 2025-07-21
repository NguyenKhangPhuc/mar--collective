import constants from "@/constants";
const Footer = () => {
    return (
        <div className="w-full bg-gray-900 py-10">
            <div className="flex flex-col max-w-7xl mx-auto">
                <div className="w-full grid lg:grid-cols-4 grid-rows-1 gap-5 py-10 border-b border-gray-800">
                    <div className="w-full flex flex-col lg:items-start items-center gap-4">
                        <div className="text-white text-3xl">Maré Collective</div>
                        <div className="text-gray-500 text-xl text-center">Authentic Portuguese experiences where ocean meets table.</div>
                        <div className="text-gray-400">RNAVT: XXXXX</div>
                    </div>
                    <div className="w-full flex flex-col lg:items-start items-center gap-2">
                        <div className="text-white text-xl">Experiences</div>
                        {constants.experienceSelection.map((e) => {
                            return (
                                <div className="text-gray-500 text-lg hover:text-white duration-300 cursor-pointer" key={`Footer Experience-${e.title}`}>
                                    {e.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full flex flex-col lg:items-start items-center gap-2">
                        <div className="text-white text-xl">Destinations</div>
                        {constants.exploreSection.map((e) => {
                            return (
                                <div className="text-gray-500 text-lg hover:text-white duration-300 cursor-pointer" key={`Footer Experience-${e.title}`}>
                                    {e.title}
                                </div>
                            )
                        })}

                    </div>
                    <div className="w-full flex flex-col lg:items-start items-center gap-2">
                        <div className="text-white text-xl">Company</div>
                        {constants.experienceSelection.map((e) => {
                            return (
                                <div className="text-gray-500 text-lg hover:text-white duration-300 cursor-pointer" key={`Footer Experience-${e.title}`}>
                                    {e.title}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-full flex justify-center text-gray-500 text-lg pt-10">
                    © 2024 Maré Collective. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer