'use client'

import { useState } from 'react'

import ReactMarkdown from "react-markdown"
import remarkBreaks from 'remark-breaks'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

const MarkdownEditor = ({ content, handleChange }) => {
  const [preview, setPreview] = useState(false);

  const previewHandler = () => {
    setPreview((prev) => !prev);
  }

	return (
		<div className='flex h-full items-end justify-center flex-row'>
			<textarea
        className={`${preview ? 'hidden' : ''} flex-1 max-w-[50%] h-full p-3 border rounded bg-accent resize-none`}
				value={content}
				onChange={handleChange}
			/>
      <div className={`${preview ? '' : 'hidden'} flex-1 max-w-[50%] h-full p-3 border border-black rounded`}>
				<ReactMarkdown
					className='min-w-full prose prose-invert'
					remarkPlugins={[remarkBreaks, rehypeHighlight, remarkGfm]}
				>
					{content}
				</ReactMarkdown>
			</div>
      <div className='flex flex-col ml-5 gap-2'>
        <button
          className='border border-white rounded p-1 bg-secondary 
          hover:text-gray-400 transition-colors'
        >
          Save
        </button>
        <button
          className='border border-white rounded w-28 p-1 bg-secondary
          hover:text-gray-400 transition-colors'
          onClick={previewHandler}
        >
          {preview ? 'Edit' : 'Preview'}
        </button>
      </div>
		</div>
	)
}

export default MarkdownEditor
