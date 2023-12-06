import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Note.css";
import { useState } from "react";


export default function Note(props) {

  const [show, setShow] = useState(false);
  const [editNote, seteditNote] = useState({
    title: props.title,
    content: props.content
  })

  function handleOnChange(e){
    seteditNote({
      ...editNote,
      [e.target.name] : e.target.value
    })
  }

  function handleDelete() {
    props.handleRemove(props.id);
  }

  function handleEdit() {
    setShow(true);
  }

  function handleEditNote(){
    props.handleEditNote(props.id,editNote);
    setShow(false)
      
  }

  return (
    <>
      <div className="main">
        {show ? (
          <>
            <div className="editBox">

              <input
                className="input editInput"
                type="text"
                name="title"
                placeholder="Title"
                value={editNote.title}
                onChange={ handleOnChange}
              />

              <textarea
                className="textArea editTextArea"
                name="content"
                id=""
                rows="10"
                placeholder="note"
                value={editNote.content}
                onChange={ handleOnChange}
              ></textarea>

              <div className="editBtn">
                <button className="addBtn" onClick={handleEditNote} >
                  <AddIcon style={{ fontSize: "35px" }} />
                </button>
              </div>

            </div>
          </>
        ) : (
          <>
            <div className="note">
              <h2 className="title">{props.title}</h2>
              <p className="content">{props.content}</p>
            </div>
            <button name="delete" className="btn delBtn" onClick={handleDelete}>
              <DeleteIcon />
            </button>
            <button name="edit" className="btn editBtn" onClick={handleEdit}>
              <EditIcon />
            </button>
          </>
        )}
      </div>
    </>
  );
}
