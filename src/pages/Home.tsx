import {
    faMapLocation,
    faMortarBoard,
    faEnvelope,
    faLink,
} from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom"
import ProjectItem from "../components/ProjectItem"

export default function Home() {
    return (
        <div className="bg-blue-600 flex h-full text-lg font-['Poppins']">
            <Sidebar />
            <div className="md:ml-[250px] bg-white w-full md:px-20 px-5">
                <section className="min-h-screen pt-[50px]" id="about-me">
                    {/* Personal */}
                    <h1 className="text-[52px] font-bold text-gray-800 pb-5">
                        Thang Vu Ba
                    </h1>
                    <div className="flex gap-2 items-center my-2">
                        <FontAwesomeIcon icon={faMortarBoard} />
                        <h5 className="text-xl font-semibold">
                            Student at{" "}
                            <Link
                                className="hover:text-red-400"
                                to={"https://www.tlu.edu.vn/"}
                                target="_blank"
                            >
                                Thuy Loi University
                            </Link>
                        </h5>
                    </div>
                    <div className="flex gap-2 items-center my-2">
                        <FontAwesomeIcon icon={faMapLocation} />
                        <h5 className="text-xl font-semibold">
                            Chuong Duong, Thuong Tin, Ha Noi City
                        </h5>
                    </div>
                    {/* Skill */}
                    <div className="pt-3 pb-1">
                        <div className="">
                            <span className="font-bold">Back-end</span>: I have
                            experience working with
                            <span className="font-bold">
                                {" "}
                                Nodejs, ExpressJS, MongoDB, MySQL, JWT
                            </span>
                        </div>
                    </div>
                    <div className="py-1">
                        <span className="font-bold">Front-end</span>: I have
                        experience working with
                        <span className="font-bold">
                            {" "}
                            HTML/CSS, Javascripts, React, Bootstrap, TailwindCSS
                        </span>
                    </div>
                    {/* Contact */}
                    <div className="flex gap-4 items-center my-2">
                        <FontAwesomeIcon
                            className="text-red-600"
                            icon={faEnvelope}
                        />
                        <Link
                            className="hover:text-red-400"
                            to={"mailto:thangvb.dev@gmail.com"}
                            target="_blank"
                        >
                            thangvb.dev@gmail.com
                        </Link>
                    </div>
                    <div className="flex gap-3 items-center my-2">
                        <FontAwesomeIcon
                            className="text-blue-500"
                            icon={faLink}
                        />
                        <Link
                            className="hover:text-red-400"
                            to={"https://thangvuba.com"}
                            target="_blank"
                        >
                            thangvuba.com
                        </Link>
                    </div>
                    <div className="">
                        <Link
                            className="hover:text-red-400"
                            to={"https://github.com/vbthang"}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="text-[32px] p-2"
                                icon={faGithub}
                            />
                        </Link>
                        <Link
                            className="text-blue-500 hover:text-red-400"
                            to={"https://www.facebook.com/vu.bathang.168/"}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="text-[32px] p-2"
                                icon={faFacebook}
                            />
                        </Link>
                    </div>
                </section>
                <hr className="my-5 border-gray-300" />
                <section className="min-h-screen py-[50px]" id="projects">
                    <h1 className="text-[32px] font-bold pt-5 pb-7">
                        Projects
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <ProjectItem
                            title="BookStore API"
                            description="Xây dựng RESTful API cho website bán sách"
                            path="https://github.com/"
                            img_path="./api.png"
                            start_time="04/2024"
                            end_time="Now"
                        />
                        <ProjectItem
                            title="Music Player API"
                            description="Xây dựng RESTful API cho website bán sách"
                            path="https://github.com/"
                            img_path="./api.png"
                            start_time="03/2024"
                            end_time="04/2024"
                        />
                    </div>
                </section>
                {/* <section className="min-h-screen" id="education">
                    Education
                </section>
                <section className="min-h-screen" id="the-end">
                    The End
                </section> */}
            </div>
        </div>
    )
}
