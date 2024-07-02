import React, { useState } from "react"
import { Link } from "react-router-dom" // Đổi đường dẫn tương ứng nếu bạn sử dụng React Router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface MenuItemProps {
    icon: IconDefinition
    text: string
    path: string
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, text, path }) => {
    const toggleSidebar = () => {
        const section = document.getElementById("sidebar")
        section?.classList.toggle("hidden")
    }

    const handleClick = () => {
        const section = document.getElementById(path)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
        toggleSidebar()
    }

    return (
        <li className="font-bold">
            {/* <Link
                to={`#${path}`}
                className="flex items-center justify-center py-3 hover:bg-gray-700 transition duration-300 ease-in-out"
            ></Link> */}
            <div
                onClick={handleClick}
                className="flex items-center justify-center py-3 hover:bg-gray-700 transition duration-300 ease-in-out"
            >
                <FontAwesomeIcon icon={icon} className="pr-5" />
                <h5>{text}</h5>
            </div>
        </li>
    )
}

export default MenuItem
