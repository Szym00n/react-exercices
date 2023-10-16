function Person({ personData }) {
  const { id, name, age, image } = personData;
  return (
    <article className="person">
      <img src={image} className="img" alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
}
export default Person;
