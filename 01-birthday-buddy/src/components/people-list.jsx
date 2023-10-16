import peopleArray from "../data";
import Person from "./person";

function People() {
  console.log(peopleArray);
  return (
    <>
      {peopleArray.map((person) => (
        <Person key={person.id} personData={person} />
      ))}
    </>
  );
}

export default People;
