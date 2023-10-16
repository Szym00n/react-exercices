import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuid4 } from "uuid";

function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty, index) => (
        <div key={uuid4()} className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>{duty}</p>
        </div>
      ))}
    </div>
  );
}
export default Duties;
