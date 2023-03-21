import React, { useRef } from 'react'
import { FiSettings } from "react-icons/fi"
import { AiOutlineAppstore, AiOutlineProject } from "react-icons/ai"
import { RiTaskLine } from "react-icons/ri"
import { Link, NavLink } from 'react-router-dom'

const sidebarItems = [
    {
        icon: <AiOutlineAppstore size={20} />,
        title: "Home",
        path: "/"
    },
    {
        icon: <RiTaskLine size={20} />,
        title: "Tasks",
        path: "/tasks"
    },
    {
        icon: <AiOutlineProject size={20} />,
        title: "Projects",
        path: "/projects"
    },
    {
        icon: <FiSettings size={20} />,
        title: "Settings",
        path: "/settings"
    },
]
const Sidebar = () => {
    const sideRef = useRef(null)
    return (
        <div className='flex-[1] px-[20px] pt-[30px] border-r-borderColor border-r-[1px]'>
            <Link to="/" className='flex items-center mb-[48px] justify-center w-[40px] h-[40px] border-borderColor border-[1px] rounded-lg'>
                <span className='text-xl'>w.</span>
            </Link>
            <div className='sidebarItems'>
                {
                    sidebarItems.map((item) => (
                        <NavLink className="flex mb-4 items-center p-[12px] rounded-lg gap-4 opacity-60" to={item.path}>
                            {item.icon}
                            <span className='text-sm'>{item.title}</span>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar
