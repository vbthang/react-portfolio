import {
    faPerson,
    faFlask,
    faBoxesStacked,
    faKeyboard,
    faSchool,
    faRunning,
    faCircle,
    faUser,
    faDownLong,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons"
import MenuItem from "../components/MenuItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar() {
    const toggleSidebar = () => {
        const section = document.getElementById("sidebar")
        section?.classList.toggle("hidden")
    }

    return (
        <>
            <div
                id="sidebar"
                className="
                md:w-[250px] hidden md:block fixed top-0 py-10 md:h-screen w-full overflow-auto text-center bg-gray-900 transition duration-300 ease-in-out z-[1]"
            >
                <div className="text-gray-100 text-xl">
                    <div className="hidden p-2.5 mt-1 md:flex md:flex-col items-center gap-3">
                        <img
                            src="./avatar.jpg"
                            className="rounded-full object-cover md:w-[150px] md:h-[150px] w-12 h-12"
                        />
                    </div>
                    <ul>
                        <MenuItem
                            icon={faUser}
                            text="About Me"
                            path="about-me"
                        />
                        {/* <MenuItem
                        icon={faFlask}
                        text="Experience"
                        path="experience"
                    /> */}
                        <MenuItem
                            icon={faBoxesStacked}
                            text="Projects"
                            path="projects"
                        />
                        {/* <MenuItem icon={faKeyboard} text="Skills" path="skills" /> */}
                        {/* <MenuItem
                        icon={faSchool}
                        text="Education"
                        path="education"
                    /> */}
                        {/* <MenuItem icon={faRunning} text="Hobby" path="hobby" /> */}
                        {/* <MenuItem icon={faCircle} text="The End" path="the-end" /> */}
                    </ul>
                </div>
            </div>
            <div
                onClick={toggleSidebar}
                className="md:hidden fixed top-0 bg-slate-500 left-0 w-full flex justify-center h-[30px] hover:bg-slate-300 z-[1]"
            >
                CV ONLINE
                <FontAwesomeIcon
                    className="absolute right-5 top-1"
                    icon={faCaretDown}
                />
            </div>
        </>
    )
}
