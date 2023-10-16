import logo from "./logo.svg";
import { social, links } from "./data";
import { FaTimes } from "react-icons/fa";

import { useAppContext } from "/src/AppContext";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon} {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-links">
        {social.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon} {text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
export default Sidebar;
