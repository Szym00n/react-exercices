// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

import { useAppContext } from "./context/AppContext";

function App() {
  const { loading } = useAppContext();

  return (
    <main>
      {" "}
      {loading ? (
        <div className="loading"></div>
      ) : (
        <>
          <Navbar />
          <CartContainer />
        </>
      )}
    </main>
  );
}

export default App;
