import React, { useState } from "react";
import "./output.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  function addNote() {
    if (inputValue.trim() !== "") {
      setNotes([...notes, inputValue]);
      setInputValue("");
    }
  }

  function deleteNote(index) {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  }

  return (
    <div className="w-full h-screen bg-slate-800 flex justify-center items-center">
      <div className="w-96 p-5 bg-slate-700 rounded-3xl">
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="p-3 bg-slate-900 text-white m-2 rounded"
            value={inputValue}
            onChange={handleInputValue}
          />
          <button
            className="p-3 bg-purple-700 rounded-xl text-white"
            onClick={addNote}
          >
            Submit
          </button>
        </div>

        <div className="w-full">
          {notes.map((note, index) => (
            <div className="flex justify-between items-center text-white mb-2" key={index}>
              <div>{index}</div>
              <div>{note}</div>
              <div>
                <button
                  onClick={() => deleteNote(index)}
                  className="p-2 bg-purple-700 rounded-xl text-white"
                >
                  DEL
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
