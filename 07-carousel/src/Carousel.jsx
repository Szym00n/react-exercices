import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { longList } from "./data";

function Carousel() {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  function prevSlide() {
    setCurrentPerson(
      (oldPerson) => (oldPerson - 1 + people.length) % people.length
    );
  }
  function nextSlide() {
    setCurrentPerson((oldPerson) => (oldPerson + 1) % people.length);
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, name, title, image, quote } = person;
        return (
          <article
            className="slide"
            key={id}
            style={{ translate: `${100 * (personIndex - currentPerson)}%` }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
}
export default Carousel;
