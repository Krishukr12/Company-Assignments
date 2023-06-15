import React from "react";

import classes from "./ContractCard.module.css";
import { BsShare } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDirectionsBoat } from "react-icons/md";
const ContractCard = () => {
  return (
    <div className={classes.contractCard_container}>
      <div className={classes.title_icon_container}>
        <div className={classes.title_container}>IOANNIS</div>
        <div className={classes.icon_container}>
          <BsShare />
          <AiOutlineArrowDown style={{ color: "#561b8c" }} />
          <AiOutlineStar style={{ color: "#fee10b" }} />
        </div>
      </div>
      <div className={classes.address_container}>
        <img
          className={classes.nationFlag}
          src="https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_640.png"
          alt="USA Flag"
        />
        <span style={{ display: "flex" }}>
          United State | <IoLocationOutline style={{ marginTop: "5px" }} /> Tuna
          Port | 5906 NAR(Kcal/kg)
        </span>
      </div>

      <div className={classes.shipped_addresses}>
        <MdOutlineDirectionsBoat /> Test Vessel eAuction 6750 NAR
      </div>
      <div className={classes.bid_price_container}>
        <div>
          <label className={classes.price_lable}>Bid Price /MT</label>
          <br />
          INR 0.00
        </div>
        <div>
          <label className={classes.price_lable}>Floor Price /MT</label>
          <br />
          INR 0.00
        </div>
        <div>
          <label className={classes.price_lable}>Last Match </label>
          <br />
          INR 0.00
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
