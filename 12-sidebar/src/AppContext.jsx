import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  function openSidebar() {
    setSidebarOpen(true);
  }

  function closeSidebar() {
    setSidebarOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const value = {
    isSidebarOpen,
    isModalOpen,
    openSidebar,
    closeSidebar,
    openModal,
    closeModal,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
