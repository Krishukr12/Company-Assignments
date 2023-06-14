import "./index.css";

// Component imports
import { Navbar } from "../src/Components/Navbar/Navbar";
import MarketDetails from "./Components/Market Details/MarketDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content_container">
        <MarketDetails />
      </div>
    </div>
  );
}

export default App;
