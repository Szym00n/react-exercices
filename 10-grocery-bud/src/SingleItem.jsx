import { useState } from "react";

function SingleItem({ item, removeItem, toggleCompleted }) {
  const { name, id, completed } = item;
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          toggleCompleted(id);
        }}
      />
      <p
        style={{
          textDecoration: completed && "line-through",
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
}
export default SingleItem;
