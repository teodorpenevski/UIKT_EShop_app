import axios from "../../custom-axios/axios";
import React, { useEffect, useState } from "react";
import classes from "./Filter.module.css";

const CategoryFilter = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("/categories").then((res) => {
      const resCategories = res.data;
      setCategories(resCategories);
      setIsLoaded(true);
    });
  }, []);
  const handleCategoryChange = (event) => {
    props.setCategory(event.target.value);
  };

  return (
    <div className={classes.catgoryFilter}>
      Product category:
      <select
        onChange={handleCategoryChange}
        name="categoryFilter"
        id="categoryFilter"
        className={classes.dropdown}
      >
        {isLoaded === false ? (
          <option value="all">Loading...</option>
        ) : (
          <>
            <option value="all">All</option>

            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  );
};

export default CategoryFilter;
