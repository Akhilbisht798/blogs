import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate()
    function navigateTo(path) {
        navigate(path)
    }
        return (
        <nav>
            <div>Home</div>
            <div>About Me</div>
        </nav>
    )
}