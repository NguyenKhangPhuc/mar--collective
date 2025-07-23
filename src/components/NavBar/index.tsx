import constants from "@/constants"
import NavBarMobile from "./NavBarMobile"

const NavBar = () => {
    return (
        <div className="fixed w-full h-18 z-50 backdrop-blur-md shadow-md ">
            <div className="max-w-7xl mx-auto h-full flex justify-between items-center px-4 relative">
                <div className="flex gap-2 font-bold text-3xl">
                    <div className="bg-gradient-to-r from-blue-400 to-gray-300 bg-clip-text text-transparent">Viagem</div>
                    <div>Perfecta</div>
                </div>
                <div className="md:block hidden flex space-x-8">
                    {
                        constants.navLink.map(element => {
                            return (
                                <a
                                    href={`${element.link}`}
                                    key={`${element.title}`}
                                    className="text-gray-400 hover:text-blue-300 duration-300 transition-colors text-lg"
                                >{element.title}</a>
                            )
                        })
                    }
                </div>
                <NavBarMobile />
            </div>
        </div>
    )
}
export default NavBar