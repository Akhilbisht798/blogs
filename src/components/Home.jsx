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
            {
                filesList.files.map((item, index) => {
                    if (index > 1 && !showAll) {
                        return;
                    }
                    return <Blog title={item.title} key={index} filepath={`/blog/${item.filePath}`} />
                })
            }
            <button onClick={onClickHandler}>Show All</button>
        </div>
    )
}
