import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <h2>
      Something went wrong. We haven't been able to find requested drink recipe.
    </h2>
  );
};
export default SinglePageError;
