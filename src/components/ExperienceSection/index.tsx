import constants from "@/constants"
import ExperienceCard from "./ExperienceCard"

const ExperienceSection = () => {
    return (
        <div className="w-full py-20 flex flex-col items-center gap-5" id="experience">
            <div className="font-bold text-center lg:text-6xl text-4xl">Signature Experiences</div>
            <div className="lg:w-1/2 w-full text-center lg:text-2xl text-xl text-gray-500">Three pillars of authentic Portuguese discovery, crafted through our unique expertise</div>
            <ExperienceCard experienceSection={constants.experienceSection} />
        </div>
    )
}

export default ExperienceSection