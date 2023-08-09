import ReactMarkdown from "react-markdown"
import remarkBreaks from 'remark-breaks'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

const MarkdownEditor = ({ content, handleChange }) => {
	return (
		<div className='flex h-full flex-row gap-10'>
			<textarea
				className='flex-1 w-1/2 h-full p-3 border rounded bg-accent resize-none'
				value={content}
				onChange={handleChange}
			/>
			<div className="flex-1 w-1/2 p-3 border border-black rounded">
				<ReactMarkdown
					className='prose prose-invert'
					remarkPlugins={[remarkBreaks, rehypeHighlight, remarkGfm]}
				>
					{content}
				</ReactMarkdown>
			</div>
		</div>
	)
}

export default MarkdownEditor