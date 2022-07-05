import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftItem}>
        <Link to="/home" style={{ textDecoration: "None" }}>
          <div className={classes.logo}>EShop</div>
        </Link>
      </div>
      <div className={classes.rightItem}>
        <Link to="/shoppingCart/1">
          <div className={classes.iconsCart}>
            <TiShoppingCart />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
