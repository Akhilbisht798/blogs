import MarkdownRender from './MarkdownRender'

export function Blog({ title, filepath }) {
    function handleClick(event) {
        console.log("Clicked")
        return (
            <MarkdownRender filePath={filepath}/>
        )
    }

    return (
        <div className=" text-xl " onClick={handleClick}>
            {title}
        </div>
    )
}