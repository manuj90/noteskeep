import React, { useState } from "react";

const CreateNote = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [expand, setExpand] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  };

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <form>
        {expand && (
          <input
            value={note.title}
            type="text"
            name="title"
            id="noteTitle"
            placeholder="Note title"
            onChange={handleChange}
          />
        )}

        <p>
          <textarea
            value={note.content}
            onClick={handleExpand}
            name="content"
            id="noteContent"
            placeholder="Take a note..."
            onChange={handleChange}></textarea>
        </p>
        <button className="button" onClick={submitNote}>
          +
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
