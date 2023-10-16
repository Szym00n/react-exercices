import { useState, useEffect } from "react";
import data from "./data";
import Person from "./components/person";

const App = () => {
  const [people, setPeople] = useState(data);

  // useEffect(() => {
  //   setPeople(data);
  // }, []);

  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthdays Today</h2>
        {people.map((person) => (
          <Person key={person.id} personData={person} />
        ))}
        <button
          className="btn btn-block"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
