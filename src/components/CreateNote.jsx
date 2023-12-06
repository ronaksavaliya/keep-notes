import { useState } from "react";
import React from "react";
import "./CreateNote.css";
import AddIcon from "@mui/icons-material/Add";

export default function CreateNote(props) {
  const [show1, setshow1] = useState(true);
  const [show2, setshow2] = useState(false);
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  function handleonChange(e) {
    setnote({
      ...note,
      [e.target.name]: e.target.value,
    });
  }

  function handleShow() {
    setshow1(false);
    setshow2(true);
  }

  function handleClick() {
    props.handleAdd(note);

    setshow1(true);
    setshow2(false);

    setnote({
      title: "",
      content: "",
    });
  }

  return (
    <>
      <div className="mainDiv">
        {show1 && (
          <div className="create">
            <input
            className="input"
              type="text"
              placeholder="write a note"
              onClick={handleShow}
            />
          </div>
        )}

        {show2 && (
          <div className="text">
            <input
            className="input"
              type="text"
              name="title"
              placeholder="Title"
              value={note.title}
              onChange={handleonChange}
            />
            <textarea
            className="textArea"
              name="content"
              id=""
              rows="10"
              placeholder="note"
              value={note.content}
              onChange={handleonChange}
            ></textarea>
            <div className="Btn">
              <button className="addBtn" onClick={handleClick}>
                <AddIcon style={{ fontSize: "35px" }} />
              </button>
            </div>
          </div>
        )}

        {props.showUndoBtn && (
          <button className="undoBtn" onClick={props.handleUndo}>
            Undo
          </button>
        )}
        <button className="delAllBtn" onClick={props.handleDelAll}>
            Delete All
          </button>
      </div>
      <div className="horizontalLine"></div>
    </>
  );
}
