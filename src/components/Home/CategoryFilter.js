import axios from "axios";
import React, { useEffect, useState } from "react";
import classes from "./Filter.module.css";

const CategoryFilter = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      const resCategories = res.data;
      setCategories(resCategories);
      setIsLoaded(true);
    });
  }, []);
  const handleCategoryChange = (event) => {
    props.setCategory(event.target.value);
  };

  return (
    <div className={classes.productFilter}>
      Product category:
      <select
        onChange={handleCategoryChange}
        name="categoryFilter"
        id="categoryFilter"
        className={classes.dropdown}
      >
        {isLoaded === false ? (
          <option value="default">Loading...</option>
        ) : (
          <>
            <option value="default">Select</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default CategoryFilter;
