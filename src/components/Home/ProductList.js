import React, { useEffect, useState } from "react";
import classes from "./ProductList.module.css";
import { IoWalletSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const products = res.data;
      setProducts(products);
      setIsLoaded(true);
    });
  }, []);
  let filteredData;
  if (!props.selectedCategory || props.selectedCategory === "default") {
    filteredData = products;
  } else {
    filteredData = products.filter(
      (product) => product.category === props.selectedCategory
    );
  }

  return (
    <div>
      {isLoaded === true
        ? filteredData.map((product) => (
            <div key={product.id} className={classes.container}>
              <div className={classes.imgDiv}>
                <img className={classes.image} src={product.image} />
              </div>
              <div className={classes.productName}>{product.title}</div>
              <div className={classes.price}>
                <div className={classes.iconsCart}>
                  <IoWalletSharp />
                </div>
                <div>${product.price}</div>
              </div>
              <div className={classes.details}>
                <button className={classes.button1}>Details!</button>
              </div>
              <div className={classes.cart}>
                <button className={classes.button2}>Add to cart!</button>
              </div>
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default ProductList;
