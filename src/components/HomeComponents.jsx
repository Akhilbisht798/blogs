import { useNavigate } from 'react-router-dom';

export function Blog({ title, filepath }) {
    const navigate = useNavigate()

    function handleClick(event) {
        navigate(filepath)
    }

    return (
        <li
            onClick={handleClick}
            tabIndex="0"
            className="text-blue-600 underline hover:text-blue-800 active:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-colors duration-200">
            {title}
        </li>
    )
}