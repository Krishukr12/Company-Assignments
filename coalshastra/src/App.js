import "./index.css";

// Component imports
import { Navbar } from "../src/Components/Navbar/Navbar";
import MarketDetails from "./Components/Market Details/MarketDetails";
import FilterAndSearch from "./Components/Filter and Search/FilterAndSearch";
import { ContractAndPrice } from "./Components/Contract and Price/ContractAndPrice";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content_container">
        <MarketDetails />
        <FilterAndSearch />
        <ContractAndPrice />
      </div>
    </div>
  );
}

export default App;
