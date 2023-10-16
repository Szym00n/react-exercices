function BtnContainer({ jobs, currentItem, setCurrentItem }) {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => (
        <button
          key={item.id}
          className={`job-btn ${index === currentItem ? "job-btn-active" : ""}`}
          onClick={() => setCurrentItem(index)}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
}
export default BtnContainer;
