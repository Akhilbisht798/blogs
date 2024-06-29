import MarkdownRender from "./components/MarkdownRender"
import { useEffect, useState } from "react"
import Home from "./components/Home";

function App() {
  const [content, setContent] = useState("")

  useEffect(() => {
    import("../../blogs/content.md").then(res => {
      fetch(res.default)
        .then(res => res.text())
        .then(text => setContent(text))
    });
  });

  return (
    <>
      <Home />
      <MarkdownRender content={content} />
    </>
  )
}

export default App
