import { Blog } from "./HomeComponents"

export default function Home() {
    return (
        <div className="">
            Home
            <div className="blogs">
                <Blog title="ABC" filepath="/blog/abc.md"/>
            </div>
            <button>Show All</button>
        </div>
    )
}
