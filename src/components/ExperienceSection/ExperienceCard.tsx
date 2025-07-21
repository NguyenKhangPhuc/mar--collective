'use client'
import { useFormContext } from '@/contexts/FormContext';
import DoneIcon from '@mui/icons-material/Done';
import { ReactNode } from 'react';
interface ExperienceSection {
    icon: ReactNode,
    color: string,
    title: string,
    subText: string,
    offers: Array<string>,
    cost: string
}
interface Props {
    experienceSection: Array<ExperienceSection>
}
const ExperienceCard = ({ experienceSection }: Props) => {
    const { isOpen, setIsOpen } = useFormContext()
    console.log(isOpen)
    return (
        <div className="max-w-7xl flex lg:flex-row flex-col gap-5">
            {experienceSection.map((e) => {
                return (
                    <div
                        className="lg:w-1/3 w-full lg:h-[670px] xl:h-[600px] h-[500px] mt-10 lg:p-10 p-5 flex flex-col items-center shadow-xl/30 rounded-xl  transition duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl/40"
                        key={`Experience-${e.title}`}
                        onClick={() => setIsOpen(true)}
                    >
                        <div className="w-full flex justify-center">
                            <div className={`w-20 h-20 rounded-full text-white flex items-center justify-center ${e.color}`}>{e.icon}</div>
                        </div>
                        <div className="w-full text-center lg:text-3xl text-2xl font-bold gap-1 pt-5">{e.title}</div>
                        <div className="w-11/12 h-1/7 text-center text-gray-500 lg:text-lg text-base">{e.subText}</div>
                        <div className="w-full h-1/2 flex flex-col items-center">
                            {e.offers.map((offer) => {
                                return (
                                    <div className="w-full flex items-center gap-3 p-1 text-gray-500 lg:text-base text-sm" key={`Offer ${offer}`}> <DoneIcon /> {offer}</div>
                                )
                            })}
                        </div>

                        <div className="w-full text-center text-blue-500 font-bold lg:text-3xl text-2xl"> {e.cost}</div>
                        <div className="w-full-text-center text-gray-400">per person/day</div>
                        <button className={`mt-5 flex items-center gap-3 lg:p-3 p-2 lg:px-8 px-6 text-white rounded-lg lg:text-2xl text-xl font-bold shadow-xl hover:opacity-60 duration-300 cursor-pointer ${e.color}`}>Learn more</button>
                    </div>
                )
            })}

        </div>
    )
}

export default ExperienceCard