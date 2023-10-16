import { useQuery, useQueryClient } from "@tanstack/react-query";

import searchPhotos from "./searchPhotos.";
import { useAppContext } from "./AppContext";

const useSearch = () => {
  const { searchValue, setSearchValue } = useAppContext();
  //const queryClient = useQueryClient();

  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["search", searchValue],
    queryFn: async () => {
      if (!searchValue) return null;
      const { data } = await searchPhotos("/?query=" + searchValue);
      return data;
    },
  });

  return {
    isLoading,
    data,
    error,
    isError,
  };
};

export default useSearch;
