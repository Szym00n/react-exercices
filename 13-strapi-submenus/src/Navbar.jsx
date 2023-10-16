import { FaBars } from "react-icons/fa";

import { useGlobalContext } from "/src/GlobalContext.jsx";
import NavLinks from "./NavLinks";

function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();

  function handleSubmenu({ target }) {
    if (target.classList.contains("nav-link")) return;
    setPageId(null);
  }

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
}
export default Navbar;
