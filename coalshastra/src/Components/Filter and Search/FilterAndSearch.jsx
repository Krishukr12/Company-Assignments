import React from "react";

import classes from "./FilterAndSearch.module.css";

import { AiOutlineSearch } from "react-icons/ai";

const SelectOptionData = [
  { label: "Currency", option: "INR" },
  { label: "Payments Methods", option: "Payment Methods" },
  { label: "Lifting Days", option: "Lifting Days" },
];

const FilterAndSearch = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.filter_container}>
        {SelectOptionData.map((item) => {
          return (
            <div>
              <label>{item.label}</label>
              <br></br>
              <select>
                <option value={`${item.option}`}>{item.option}</option>
              </select>
            </div>
          );
        })}
        <div className={classes.clear_all}>Clear All</div>
      </div>

      <div className={classes.search_container}>
        <AiOutlineSearch />
        <input
          className={classes.searchBar}
          placeholder="Search by Vessel, Type, etc.."
          type="text"
        />
      </div>
    </div>
  );
};

export default FilterAndSearch;
