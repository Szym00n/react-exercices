function Categories({ categories, setCategory, activeCategory }) {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          type="button"
          className={`btn ${activeCategory === category && "active"}`}
          key={category}
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default Categories;
