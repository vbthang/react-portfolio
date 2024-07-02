import { Link } from "react-router-dom"

export default function SectionPage(title: string, path: string) {
    return (
        <li>
            <Link to="{{path}}" />
        </li>
    )
}
