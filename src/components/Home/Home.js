import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import PriceFilter from "./PriceFilter";
import SearchFilter from "./SearchFilter";
import CategoryFilter from "./CategoryFilter";
import ProductList from "./ProductList";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(props.products);
  const setCategoryHandler = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const searchHandler = (value) => {
    setSearch(value);
  };

  let filterData = props.products;
  console.log(category);
  if (!category && (!search || search === "")) {
    filterData = props.products;
  } else {
    if (category === "all") {
      filterData = props.products;
    }
    filterData = filterData.filter((product) =>
      product.name.toLocaleLowerCase().includes(search)
    );
    if (category !== "all") {
      filterData = filterData.filter(
        (product) => product.category.name === category
      );
      filterData = filterData.filter((product) =>
        product.name.toLocaleLowerCase().includes(search)
      );
    }
  }

  return (
    <div className={classes.homeContainer}>
      <div className={classes.firstRow}>
        <div className={classes.filterContainer}>
          <div className={classes.filterText}>Filter by:</div>
          {/* <div className={classes.priceFilter}>
            <PriceFilter />
          </div> */}
          <div className={classes.searchFilter}>
            <SearchFilter searchHandler={searchHandler} />
          </div>
          <div className={classes.categoryFilter}>
            <CategoryFilter setCategory={setCategoryHandler} />
          </div>
        </div>
        <div>
          <Link to="/products">
            <button className={classes.addProductsBtn}> Add Products</button>
          </Link>
        </div>
      </div>
      <div className={classes.listContainer}>
        <ProductList products={filterData} onEdit={props.onEdit} onDetails={props.onDetails} onAddToCart={props.onAddToCart}/>
      </div>
    </div>
  );
};

export default Home;
