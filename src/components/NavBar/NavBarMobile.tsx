'use client'
import constants from "@/constants"
import { useState } from "react"
const NavBarMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="md:hidden block flex space-x-8">
                <label className="hamburger">
                    <input type="checkbox" onChange={() => setIsOpen(!isOpen)} />
                    <svg viewBox="0 0 32 32">
                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </div>
            <div
                className={`absolute w-full top-full left-0 flex flex-col backdrop-blur-md shadow-xl/30 bg-gray-900 py-5 gap-5 items-center 
                ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-300`}
            >
                {
                    constants.navLink.map(element => {
                        return (
                            <a
                                href={`${element.link}`}
                                key={`${element.title}`}
                                className="text-gray-400 hover:text-blue-300 duration-300 transition-colors text-xl z-100 border-b border-gray-300 p-1"
                            >{element.title}</a>
                        )
                    })
                }
            </div>

        </>
    )
}


export default NavBarMobile