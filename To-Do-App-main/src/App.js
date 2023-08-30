import React, { useEffect, useState }  from "react";
import "./App.css";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("todo")) || []);

  const addNote = (color) => {
    const tempNotes = [...notes];
    console.log(tempNotes);
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 75),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    console.log(tempNotes);
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];
    console.log(tempNotes);
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;

// functionalty : first we call addNote which is in <sidebar/> ( in which we pass the color)
//               then we make a copy of the notes(template) ,then we set new note in that copy and set that copy.
//               then it will reflect in note NoteContainer (notes)
/*
//Store the object into storage
localStorage.setItem("userData", JSON.stringify(userData));
// Retrieve the object from the storage
const data = localStorage.getItem("userData");
console.log("data: ", JSON.parse(data));
*/