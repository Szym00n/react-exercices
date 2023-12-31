import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

const action = async () => {};

const SearchForm = ({ searchTerm = "" }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.status === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
