import React from "react";
import classes from "./Filter.module.css";

const PriceFilter = () => {
  // Our States
  const [value, setValue] = React.useState([2, 10]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.price}>
      Price: {" "}
      <input type="text" name="name" /> -{" "}
      <input type="text" name="name" />
    </div>
  );
};

export default PriceFilter;
