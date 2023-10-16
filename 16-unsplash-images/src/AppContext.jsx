import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    const localSettings = localStorage.getItem("preferredDarkTheme");
    console.log(localSettings, Boolean(localSettings));
    const preferredDarkTheme =
      localSettings != null
        ? Boolean(+localSettings)
        : window.matchMedia("prefers-color-scheme:dark").matches;
    console.log(preferredDarkTheme);

    localStorage.setItem("preferredDarkTheme", +preferredDarkTheme);

    document.body.classList.toggle("dark-theme", preferredDarkTheme);
    setIsDarkTheme(preferredDarkTheme);
  }, []);

  const contextValue = {
    isDarkTheme,
    toggleDarkTheme() {
      const newDarkTheme = !isDarkTheme;
      document.body.classList.toggle("dark-theme", newDarkTheme);
      setIsDarkTheme(newDarkTheme);
      localStorage.setItem("preferredDarkTheme", +newDarkTheme);
    },
    searchValue,
    setSearchValue,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
export default AppProvider;

export const useAppContext = () => useContext(AppContext);
