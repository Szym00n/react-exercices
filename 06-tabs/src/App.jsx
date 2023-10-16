import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentItem, setCurrentItem] = useState(0);

  function fetchError(error, url) {
    setIsLoading(false);
    setError(error);
    return new Error(error + " from url " + url);
  }

  useEffect(() => {
    async function load(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw fetchError("Failed to fetch data", url);
        const data = await response.json();
        setJobs(data);
        setIsLoading(false);
      } catch (error) {
        throw fetchError("Failed to fetch data", url);
      }
    }

    load(url);
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="jobs-center">
        <div className="error">{error}</div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
