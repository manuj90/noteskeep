import React from "react";
import trash from "../assets/trash.webp";

const Note = ({id, title, content, onDelete }) => {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="deleteButton" onClick={() => onDelete(id)}>
        <picture>
          <source srcSet={trash} type="image/webp" />
          <img
            src={trash}
            alt="delte"
            style={{ height: "2rem", width: "2rem" }}
          />
        </picture>
      </button>
    </div>
  );
};

export default Note;
