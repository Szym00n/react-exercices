import { useGlobalContext } from "./GlobalContext";

import sublinks from "./data";

function NavLinks() {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map(({ pageId, page }) => (
        <button
          key={pageId}
          className="nav-link"
          onMouseEnter={() => {
            setPageId(pageId);
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
export default NavLinks;
