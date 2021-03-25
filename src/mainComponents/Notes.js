
import React from 'react'
import { useState, useEffect } from 'react'
//Components
import { Note } from '../Components/Note'
import { getAllNotes, createNote } from '../services/notesServices'

//===========================================================
export const Notes = ()=>{
    //States
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getAllNotes().then((notes) => {
            setNotes(notes)
            setLoading(false)
        })
    },[])
    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    } 
    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            title: newNote,
            body: newNote,
            userId: 1
      }
      createNote(noteObject).then(response=>{
          setNotes(notes.concat(noteObject))
          setNewNote('')
      })
    }
      return (
          <div>
              <h1>Notes</h1>
              {
                  loading
                  ? 'Cargando...'
                :""
              }
            <li>Lista</li>
          <ol>
              { notes.map(note => <Note key={note.id} text={note.body}/>)  }
          </ol>
          <form onSubmit={addNote}>
            <input value={newNote} onChange={handleNoteChange}/>
            <button type="submit">Save</button>
          </form>
          </div>
      )
}