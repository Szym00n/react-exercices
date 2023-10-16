import { useQuery } from "@tanstack/react-query";

import useSearch from "./useSearch";

function Gallery() {
  const { data, isLoading, isError } = useSearch();

  const items = data?.results || [];

  return (
    <section className="image-container">
      {isLoading ? (
        <p className="loading"></p>
      ) : (
        <>
          {items.map((item) => (
            <img
              src={item.urls.small || item.urls.regular}
              key={item.id}
              className="img"
              alt={item.alt_description}
            />
          ))}
        </>
      )}
    </section>
  );
}
export default Gallery;
