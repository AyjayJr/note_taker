'use client'

import NoteList from '@/components/NoteList'
import { useState } from 'react'

const Sidebar = () => {
	return (
		<aside className='w-48 h-full bg-secondary overflow-hidden fixed top-12 left-0'>
			<button className='p-2 text-white hover:text-gray-400 transition-colors'>
			  Search	
			</button>
      <NoteList />
		</aside>
	)
}

export default Sidebar
