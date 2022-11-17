import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  const handleDelete = (id) => {
    setNotes(prevValue => {
      return [...prevValue.filter((note, index) => index !== id )];
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateNote onAdd={addNote} />
      <div className="notes">
        {notes.map((note, idx) => (
          <Note key={idx} id={idx} title={note.title} content={note.content} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}

export default App;
