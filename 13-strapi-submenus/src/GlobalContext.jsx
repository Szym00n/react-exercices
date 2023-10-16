import { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

function GlobalProvider({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const value = {
    isSidebarOpen,
    openSidebar() {
      setSidebarOpen(true);
    },
    closeSidebar() {
      setSidebarOpen(false);
    },
    pageId,
    setPageId,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
export default GlobalProvider;
