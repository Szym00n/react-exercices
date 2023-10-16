import { useRef, useState, useEffect } from "react";
import { useGlobalContext } from "./GlobalContext";
import sublinks from "./data";

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const [timeoutID, setTimeoutID] = useState(null);
  const submenuContainerRef = useRef(null);

  const currentPage = sublinks.find((item) => item.pageId === pageId);

  useEffect(() => {
    if (timeoutID) {
      //clear timeoutId to prevent unwanted pageId reset
      clearTimeout(timeoutID);
      setTimeoutID(null);
    }
  }, [pageId]);

  function closeOnTimeout() {
    setPageId(null);
  }

  function handleSubmenuClose(e) {
    const top = submenuContainerRef.current.getBoundingClientRect().top;
    console.log(top, e.clientY);
    if (top > e.clientY) {
      //when mouse left submenu in up direction it will be closed
      //only if pageId wont be changed in 0,6s
      setTimeoutID(setTimeout(closeOnTimeout, 600));
      return;
    }
    setPageId(null);
  }

  return (
    <div
      className={`submenu ${currentPage ? "show-submenu" : ""}`}
      onMouseLeave={handleSubmenuClose}
      ref={submenuContainerRef}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map(({ id, url, label, icon }) => (
          <a key={id} href={url}>
            {icon} {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Submenu;
