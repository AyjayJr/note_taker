'use client'

import { useState } from "react"
import Nav from "@/components/Nav"
import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent"
import MarkdownEditor from "@/components/MarkdownEditor"

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: null, content: ''});

  const handleNoteChange = (e) => {
    setCurrentNote({
      ...currentNote,
      content: e.target.value,
    });
  }

  return (
    <div className='h-screen'>
      <Nav />
      <Sidebar />
      <main className="flex h-[90%] w-full">
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
