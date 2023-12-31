import React from "react";

import classes from "./ContractAndPrice.module.css";
import ContractCard from "../Contract Card/ContractCard";
import PriceDetails from "./PriceDetails";

export const ContractAndPrice = () => {
  return (
    <div className={classes.contract_price_container}>
      <div className={classes.contract_container}>
        <ContractCard />
        <ContractCard />
        <ContractCard />
      </div>
      <div className={classes.price_container}>
        <PriceDetails />
      </div>
    </div>
  );
};
