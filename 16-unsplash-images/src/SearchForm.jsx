function SearchForm({ onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const searchValue = formElements.search.value;
    if (!searchValue) return;
    console.log("search For ", searchValue);
    onSearch(searchValue);
  }

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
}
export default SearchForm;
