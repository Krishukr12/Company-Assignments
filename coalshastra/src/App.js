import "./index.css";

// Component imports
import { Navbar } from "../src/Components/Navbar/Navbar";
import MarketDetails from "./Components/Market Details/MarketDetails";
import FilterAndSearch from "./Components/Filter and Search/FilterAndSearch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content_container">
        <MarketDetails />
        <FilterAndSearch />
      </div>
    </div>
  );
}

export default App;
