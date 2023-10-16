import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setText(data.slice(0, count));
  }

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => {
            setCount(+e.target.value);
          }}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph) => (
          <p key={nanoid()}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
