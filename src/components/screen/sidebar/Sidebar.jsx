import { GoKebabHorizontal } from "react-icons/go";
import { AiFillDashboard } from "react-icons/ai";
import { useState } from "react";
import NavItem from "./NavItem.jsx";


function Sidebar() {
    const [open, setOpen] = useState(false)
    const navIconStyles = "w-full h-full";
    return (
        <div className="relative group w-[6vw] hover:w-[18vw] transition-all duration-200 bg-gray-500 h-screen relative flex flex-col items-center">
            {/* User Information */}
            <div className="transition-all h-10 group-hover:h-20 duration-300 mb-3.5">
            <AiFillDashboard className={navIconStyles}/>
            </div>
            <hr></hr>

            {/* Navigation Content */}
            <div className="flex relative w-full h-full">
                <NavItem open={open} text={"Dashboard"}>
                    {<AiFillDashboard className={navIconStyles}/>}
                </NavItem>


            </div>

            {/* Logout button */}
            <div>

            </div>
        </div>
    )
}

export default Sidebar