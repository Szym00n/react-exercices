import { useState } from "react";
import SingleQuestion from "./SingleQuestion";

function Questions({ questions }) {
  const [activeId, setActiveId] = useState(null);

  function toggleQuestion(id) {
    setActiveId((active) => (id === active ? null : id));
  }

  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion
          {...question}
          key={question.id}
          isOpen={question.id === activeId}
          toggleActive={toggleQuestion}
        />
      ))}
    </section>
  );
}
export default Questions;
