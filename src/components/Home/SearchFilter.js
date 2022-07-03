import React from "react";
import classes from "./Filter.module.css";

const SearchFilter = (props) => {
  return (
    <div className={classes.search}>
      Search:{" "}
      <input
        type="text"
        name="name"
        onChange={(e) => props.searchHandler(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchFilter;
