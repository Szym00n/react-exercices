import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import CocktaileList from "../components/CocktaileList";
import SearchForm from "../components/SearchForm";

const cocktailSearchURL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(
        `${cocktailSearchURL}${encodeURI(searchTerm)}`
      );
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { /* drinks,*/ searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktaileList drinks={drinks} />;
    </>
  );
};
export default Landing;
