import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import "highlight.js/styles/github.css"

export default function MarkdownRender({ content }) {
  return (
    <Markdown
      remarkPlugins={[remarkToc, remarkGfm]}
      rehypePlugins={[rehypeHighlight]}>
      {content}
    </Markdown>
  )
}
