import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";

const CocktaileList = ({ drinks }) => {
  if (!drinks) return <h4 style={{ textAlign: "center" }}>No drinks found</h4>;

  const formattedDrinks = drinks.map((drink) => ({
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    info: drink.strAlcoholic,
    glass: drink.strGlass,
  }));

  return (
    <Wrapper>
      {formattedDrinks.map((drink) => (
        <CocktailCard key={drink.id} {...drink} />
      ))}
    </Wrapper>
  );
};
export default CocktaileList;
