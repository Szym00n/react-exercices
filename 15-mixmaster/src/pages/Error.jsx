import { Link, useRouteError } from "react-router-dom";

import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not-found" />
          <h3>Ohh!</h3>
          <p>We can't seen to find page you are looking for</p>
          <Link to="/">Back to Home</Link>
        </div>
      </Wrapper>
    );
  }
  console.error(error);
  return <h1>Ups! Something went wrong</h1>;
};
export default Error;
