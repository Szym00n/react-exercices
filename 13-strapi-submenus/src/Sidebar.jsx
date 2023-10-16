import { FaTimes } from "react-icons/fa";

import { useGlobalContext } from "/src/GlobalContext";
import sublinks from "./data";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ pageId, page, links }) => {
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map(({ id, url, label, icon }) => (
                    <a key={id} href={url}>
                      {icon} {label}
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
