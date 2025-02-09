import React from 'react'

function NoteCard({note}) {
    const body=JSON.parse(note.body);
    const position=JSON.parse(note.position);
    const colors=JSON.parse(note.colors);
    return (
    <div>
        <div className="card" style={{backgroundColor:colors.colorBody}}>
            <div className='note-body'>
            <textarea style={{color:colors.colorText}} defaultValue={body}>
                
            </textarea>
            </div>
        </div>
    </div>
  )
}

export default NoteCard