import { useLoaderData, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailURL =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailURL}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params: { id } }) => {
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

function extractDrinkIngredients(drink) {
  let index = 0;
  const ingredients = [];
  while (drink[`strIngredient${++index}`] != null) {
    ingredients.push({
      ingredient: drink[`strIngredient${index}`],
      measure: drink[`strMeasure${index}`],
    });
  }
  return ingredients.length ? ingredients : null;
}

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));

  //api return empty string if id is wrong
  if (!data)
    return (
      <h2>
        Something went wrong.
        <br /> We haven't been able to find requested drink recipe.
      </h2>
    );

  const singleDrink = data.drinks[0];

  //console.log(singleDrink);

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const ingredients = extractDrinkIngredients(singleDrink);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span> {name}
          </p>
          <p>
            <span className="drink-data">category:</span> {category}
          </p>
          <p>
            <span className="drink-data">info:</span> {info}
          </p>
          <p>
            <span className="drink-data">glass:</span> {glass}
          </p>
          {ingredients && (
            <p>
              <span className="drink-data">ingredients:</span>
              {ingredients
                .map(
                  ({ ingredient, measure }) =>
                    `${ingredient} (${measure.trim()})`
                )
                .join(", ")}
            </p>
          )}

          <p>
            <span className="drink-data">instructions:</span> {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
