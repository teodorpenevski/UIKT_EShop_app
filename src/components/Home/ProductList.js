import React, { useEffect, useState } from "react";
import classes from "./ProductList.module.css";
import { IoWalletSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import EShopRepository from "../../repository/EShopRepository";


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
              {/*<div className={classes.details}>*/}
              {/*  <button className={classes.button1}>Details!</button>*/}
              {/*</div>*/}
              <Link className={"btn btn-info m-2"}
                    onClick={() => props.onDetails(product.id)}
                    to={"/products/" + product.id}>
                Details
              </Link>
              <Link className={"btn btn-success m-2"}
                    onClick={() => props.onAddToCart(product.id)}
                    to={"/shoppingCart/add-product/" + 1}>
                Add to cart!
              </Link>
              <div>
                <Link className={"btn btn-secondary m-2"}
                      onClick={() => props.onEdit(product.id)}
                      to={"/products/edit/" + product.id}>
                  Edit
                </Link>
              </div>
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default ProductList;
