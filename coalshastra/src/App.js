import "./index.css";

// Component imports
import { Navbar } from "../src/Components/Navbar/Navbar";
import MarketDetails from "./Components/Market Details/MarketDetails";
import FilterAndSearch from "./Components/Filter and Search/FilterAndSearch";
import { ContractAndPrice } from "./Components/Contract and Price/ContractAndPrice";
import BuyerAndSellerForm from "./Components/buyerAndSellerForm/BuyerAndSellerForm";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content_container">
        <MarketDetails />
        <FilterAndSearch />
        <ContractAndPrice />
        <Flex pr={{ base: "10px", md: "5%" }} justifyContent={"flex-end"}>
          <BuyerAndSellerForm />
        </Flex>
      </div>
    </div>
  );
}

export default App;
