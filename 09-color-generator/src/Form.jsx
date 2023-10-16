import { useState } from "react";

function Form({ addColor }) {
  const [color, setColor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addColor(color);
  }

  return (
    <section className="container">
      <h4>Color generator</h4>
      <form action="" className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="#fcdabe"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
}
export default Form;
