import { Blog } from "./HomeComponents"

export default function Home() {
    return (
        <div className="">
            My Blogs.
            <div className="">
                <Blog title="ABC" filepath="/blogs/abc.md"/>
            </div>

            <button>Show All</button>
        </div>
    )
}
