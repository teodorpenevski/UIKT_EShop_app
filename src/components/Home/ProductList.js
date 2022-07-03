import React, { useEffect, useState } from "react";
import classes from "./ProductList.module.css";
import { IoWalletSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(props.products);
    setIsLoaded(true);
  }, [props.products]);

  return (
    <div>
      {isLoaded === true
        ? products.map((product) => (
            <div key={product.id} className={classes.container}>
              <div className={classes.productName}>{product.name}</div>
              <div className={classes.price}>
                <div className={classes.iconsCart}>
                  <IoWalletSharp /> ${product.price}
                </div>
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
