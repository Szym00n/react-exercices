import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

import { useAppContext } from "./AppContext";

const App = () => {
  const { searchValue, setSearchValue } = useAppContext();

  function onSearch(value) {
    setSearchValue(value);
  }

  return (
    <main>
      <ThemeToggle />
      <SearchForm onSearch={onSearch} />
      <Gallery />
    </main>
  );
};
export default App;
