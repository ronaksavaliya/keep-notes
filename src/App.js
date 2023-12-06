import "./App.css";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import { useState } from "react";
import Note from "./components/Note";

function App() {
  const [list, setList] = useState([]);
  const [showUndoBtn, setShowUndoBtn] = useState(false);
  const [prevList, setprevList] = useState([]);

  function handleAdd(note) {
    if (note.title === "" && note.content === "") {
      window.alert("Please fill atleast one field");
      return;
    }
    setList([...list, note]);
  }

  async function handleRemove(id) {
    setprevList(list);

    let newlist = list.filter((curEle, index) => {
      return id !== index;
    });
    setList(newlist);

    setShowUndoBtn(true);

    // let promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(4);
    //   }, 3000);
    // });

    // await promise;
    setTimeout(() => {
      setShowUndoBtn(false);
    }, 3000);

  }

  function handleUndo() {
    setShowUndoBtn(false);
    setList(prevList);
  }

  function handleEditNote(id, editNote) {
    let newList = list.map((curNote, index) => {
      if (id === index) return editNote;
      else return curNote;
    });

    setList(newList);
  }

  function handleDelAll() {

    if(list.length===0)
    {
      alert("Please add atleat one note");
      return;
    }

    if( window.confirm("Are you sure to delete all notes"))
    setList([]);
  }

  return (
    <>
      <Header />
      <CreateNote
        handleAdd={handleAdd}
        showUndoBtn={showUndoBtn}
        handleUndo={handleUndo}
        handleDelAll={handleDelAll}
      />
      <div className="allNotes">
        {list.map((curEle, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={curEle.title}
              content={curEle.content}
              handleRemove={handleRemove}
              handleEditNote={handleEditNote}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
