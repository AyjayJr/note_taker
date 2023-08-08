'use client'

import { useState } from 'react'

const Sidebar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		setSidebarOpen((prev) => ( !prev ));
	}

	return (
		<aside
			className={ `${sidebarOpen ? 'w-16' : 'w-48'} flex-1 h-full bg-secondary overflow-hidden fixed top-12 left-0 transition-all duration-300`}
		>
			<button
				className='p-2 text-white hover:text-gray-400 transition-colors'
				onClick={toggleSidebar}
			>
				Toggle 
			</button>
			{/* content  */}
		</aside>
	)
}

export default Sidebar