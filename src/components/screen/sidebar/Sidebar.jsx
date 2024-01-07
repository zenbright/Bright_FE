import { AiFillDashboard } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { IoPeopleSharp} from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

import './dropdown.css'
import './textAnimation.css'


import { useState } from "react";
import NavItem from "./NavItem.jsx";
import UserImageName from "./UserImageName.jsx";
import ProjectDashboard from "./ProjectDashboard.jsx";


function Sidebar() {
    const navIconStyles = "w-10 h-10";
    const userImage = '../src/assets/images/rmitlogo.png'

    return (
        <div className="flex flex-row z-30">
            <div className="relative group w-[6vw] hover:w-[18vw] group-hover:w-[18vw] transition-all duration-500 bg-slate-100	 border-r-2 h-screen flex flex-col items-center over">
                {/* User Information */}
                <UserImageName text={"Username"} image={userImage} />

                <div className="p-3"></div>

                {/* Navigation Content */}
                <div className="flex flex-col relative w-full h-screen space-y-2">
                    <NavItem text={"Dashboard"}>
                        {<>
                            <AiFillDashboard className={navIconStyles} />
                            <div className="grandchild-content hidden  absolute left-[18vw] top-[-64px] h-screen">
                                <ProjectDashboard></ProjectDashboard>
                            </div>
                        </>}
                    </NavItem>
                    <NavItem text={"Notification"}>
                        {<IoIosNotifications className={navIconStyles} />}
                    </NavItem>
                    <NavItem text={"Calendar"}>
                        {<FaCalendarAlt className={navIconStyles} />}
                    </NavItem>
                    <NavItem text={"Message"}>
                        {<AiFillMessage className={navIconStyles} />}
                    </NavItem>
                    <NavItem text={"Setting"}>
                        {<IoIosSettings className={navIconStyles} />}
                    </NavItem>
                    <NavItem text={"About"}>
                        {<IoPeopleSharp className={navIconStyles} />}
                    </NavItem>
                </div>

                {/* Logout button */}
                <div className="w-full pb-2">
                    <NavItem text={"Logout"}>
                        {<IoMdLogOut className={navIconStyles} />}
                    </NavItem>
                </div>

            </div>
        </div>
    )
}

export default Sidebar