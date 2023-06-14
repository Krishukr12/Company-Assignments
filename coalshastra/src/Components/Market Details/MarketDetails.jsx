import React from "react";

import classes from "./MarketDetails.module.css";
import { AiOutlineStar } from "react-icons/ai";
const MarketDetails = () => {
  return (
    <div className={classes.main_container}>
      <div
        style={{ display: "flex", gap: "0.1rem" }}
        className={classes.tab_item}
      >
        <AiOutlineStar className={classes.icon} />
        <div>FAV</div>
      </div>
      <div className={`${classes.tab_item} ${classes.active}`}>USAGUJ</div>
      <div className={classes.tab_item}>WCL</div>
      <div className={classes.tab_item}>MCL</div>
      <div className={classes.tab_item}>VIZAGPT</div>
      <div className={classes.tab_item}>INDOGUJ</div>
      <div className={classes.tab_item}>NMANGPT</div>
      <div className={classes.tab_item}>USAUN</div>
      <div className={classes.tab_item}>USAM</div>
      <div className={classes.tab_item}>ECL</div>
      <div className={classes.tab_item}>ENNKAPT</div>
    </div>
  );
};

export default MarketDetails;
