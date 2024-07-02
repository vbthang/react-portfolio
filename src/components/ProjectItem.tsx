import { Link } from "react-router-dom"

interface ProjectItemProps {
    title: string
    description: string
    path: string
    img_path: string
    start_time: string
    end_time: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({
    title,
    description,
    path,
    img_path,
    start_time,
    end_time,
}) => {
    return (
        <Link
            to={path}
            target="_blank"
            className="flex flex-col items-center border-[1px] bg-[#f5f5f5] hover:bg-[#fff] border-gray-900 rounded shadow md:flex-row opacity-70 hover:scale-[102%] hover:opacity-100 transition duration-500 ease-in-out"
        >
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={img_path}
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
                <p className="text-red-400">
                    {start_time} - {end_time}
                </p>
            </div>
        </Link>
    )
}

export default ProjectItem
