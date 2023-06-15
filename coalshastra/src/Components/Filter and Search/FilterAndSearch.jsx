import React from "react";

import classes from "./FilterAndSearch.module.css";

import { AiOutlineSearch } from "react-icons/ai";

const FilterAndSearch = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.filter_container}>
        <div>
          <label>Currency</label>
          <br></br>
          <select>
            <option value="INR">INR</option>
          </select>
        </div>
        <div>
          <label>Payments Methods</label>
          <br></br>
          <select>
            <option value="payment methods">Payment Methods</option>
          </select>
        </div>
        <div>
          <label>Lifting Days</label>
          <br></br>
          <select>
            <option value="lifting days">Lifting Days</option>
          </select>
        </div>
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
