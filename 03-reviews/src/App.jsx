import { useState } from "react";
import people from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { is, name, job, image, text } = people[index];

  const checkIndex = (index) => {
    if (index >= people.length) return 0;
    if (index < 0) return people.length - 1;
    return index;
  };

  const nextPerson = () => {
    setIndex((currentIndex) => (currentIndex + 1) % people.length);
  };
  const prevPerson = () => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + people.length) % people.length
    );
  };

  const randomPerson = () => {
    const random = Math.floor(Math.random() * people.length);
    setIndex((currentIndex) => {
      return random === currentIndex ? checkIndex(random + 1) : random;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
