import { Blog } from "./HomeComponents"
import filesList from '../blogsList.json'
import { useState } from "react";

export default function Home() {
    const [showAll, setShowAll] = useState(false);

    function onClickHandler() {
        setShowAll(!showAll);
    }
    
    return (
        <div className="">
            <h1 className=" text-3xl">Home</h1>
            <ul className=" list-disc pl-5 marker:text-black">
            {
                filesList.files.map((item, index) => {
                    if (index > 1 && !showAll) {
                        return;
                    }
                    return <Blog key={index} title={item.title} filepath={`/blog/${item.filePath}`} />
                })
            }
            </ul>
            <button 
                className=" text-blue-800 underline"
                onClick={onClickHandler}>
                    Show more
                </button>
        </div>
    )
}
