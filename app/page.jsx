'use client'

import { useState } from "react"
import Nav from "@/components/Nav"
import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent"
import MarkdownEditor from "@/components/MarkdownEditor"

export default function Home() {
  const [currentNote, setCurrentNote] = useState({ id: null, content: ''});

  const handleNoteChange = (e) => {
    setCurrentNote({
      ...currentNote,
      content: e.target.value,
    });
  }

  return (
    <div>
      <Nav />
      <main className="flex w-full">
        <Sidebar />
        <div className='ml-48 mt-16 flex-1 mr-12'>
          <MarkdownEditor
            content={currentNote.content}
            handleChange={handleNoteChange}
          />
        </div>
      </main>
    </div>
  )
}
