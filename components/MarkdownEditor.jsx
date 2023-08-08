import ReactMarkdown from "react-markdown"

const MarkdownEditor = ({ content, handleChange }) => {
	return (
		<div>
			<textarea
				className='w-full p-2 border rounded bg-accent'
				value={content}
				onChange={handleChange}
				rows={10}
			/>
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	)
}

export default MarkdownEditor