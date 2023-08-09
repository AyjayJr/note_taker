import ReactMarkdown from "react-markdown"
import remarkBreaks from 'remark-breaks'

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
					remarkPlugins={[remarkBreaks]}
				>
					{content}
				</ReactMarkdown>
			</div>
		</div>
	)
}

export default MarkdownEditor