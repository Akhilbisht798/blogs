import MarkdownRender from './MarkdownRender';
import { useNavigate } from 'react-router-dom';

export function Blog({ title, filepath }) {
    const navigate = useNavigate()

    function handleClick(event) {
        navigate(filepath)
    }

    return (
        <div className=" text-xl " onClick={handleClick}>
            {title}
        </div>
    )
}