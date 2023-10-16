function Title({ text }) {
  return (
    <div className="title">
      <h2>{text || "Default title"}</h2>
      <hr className="title-underline" />
    </div>
  );
}
export default Title;
