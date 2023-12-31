import React from 'react'

const Note = ({ note }) => {
  return (
    <div
      className="border whitespace-nowrap overflow-hidden p-2 m-2 border-gray-500
      hover:cursor-pointer hover:text-gray-400 transition-colors rounded"
    >
      {note.content}
    </div>
  )
}

const NoteList = ({ notes }) => {
  let noteList = [
    { id: Math.random(), content: "I had a good day today" },
    { id: Math.random(), content: "I had a bad day today" },
    { id: Math.random(), content: "I had a decent day today" },
    { id: Math.random(), content: "I had a OK day today" }
  ]

	return (
    <>
    { noteList.map((n) => <Note note={n} />)}
    </>
	)
}

export default NoteList
