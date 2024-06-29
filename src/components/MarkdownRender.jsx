import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import remarkToc from "remark-toc"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "highlight.js/styles/github.css"

export default function MarkdownRender() {
  const { filePath } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const file = "/blogs/" + filePath;
        const res = await fetch(file);
        if (!res.ok) {
          throw new Error("Failed to fetch md file");
        }
        const text = await res.text()
        setContent(text);
      } catch (err) {
        console.log('Error: Loading md file: ', err);
      }
    }
    fetchMarkdown()
  }, [filePath])

  return (
    <>
      <Markdown
        className="markdown"
        remarkPlugins={[remarkToc, remarkGfm]}
        rehypePlugins={[rehypeHighlight]}>
        {content}
      </Markdown>
    </>
  )
}
