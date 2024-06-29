import Home from "./components/Home";
import MarkdownRender from './components/MarkdownRender'

function App() {

  return (
    <>
      <Home />
      <MarkdownRender filePath="/blogs/abc.md" />
    </>
  )

}

export default App
