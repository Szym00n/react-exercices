import { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    if (!newItemName) {
      toast.error("Element name is required");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}
export default Form;
