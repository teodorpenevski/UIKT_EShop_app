import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import PriceFilter from "./PriceFilter";
import SearchFilter from "./SearchFilter";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState("");

  const setCategoryHandler = (props) => {
    setCategory(props);
  };
  return (
    <div className={classes.homeContainer}>
      <div className={classes.filterContainer}>
        <div className={classes.filterText}>Filter by:</div>
        <div className={classes.priceFilter}>
          <PriceFilter />
        </div>
        <div className={classes.searchFilter}>
          <SearchFilter />
        </div>
        <div className={classes.productFilter}>
          <CategoryFilter setCategory={setCategoryHandler} />
        </div>
      </div>
      <div className={classes.listContainer}>
        <ProductList selectedCategory={category} />
      </div>
    </div>
  );
};

export default Home;
