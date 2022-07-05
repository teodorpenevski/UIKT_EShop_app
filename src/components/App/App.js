import "./App.module.css";
import React, { Component } from "react";
import Products from "../Products/List/products";
import EShopService from "../../repository/EShopRepository.js";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Header from "../SiteStructure/Header/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import MonitorAdd from "../Products/Add/monitorAdd";
import MouseAdd from "../Products/Add/mouseAdd";
import LaptopAdd from "../Products/Add/laptopAdd";
import KeyboardAdd from "../Products/Add/keyboardAdd";
import Footer from "../SiteStructure/Footer/Footer.js";
import ProductEdit from "../Products/Edit/productEdit";
import Home from "../Home/Home";
import Details from "../Products/Details/Details";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
      selectedProduct: {},
      shoppingCart: {}
    };
  }

  render() {
    return (
      <Router>
        <Header />
        <div className={"container"}>
          <Route
            exact
            path="/monitors/addMonitor"
            render={() => (
              <MonitorAdd
                categories={this.state.categories}
                onAddMonitor={this.addMonitor}
              />
            )}
          />
          <Route
            exact
            path="/mice/addMice"
            render={() => (
              <MouseAdd
                categories={this.state.categories}
                onAddMouse={this.addMouse}
              />
            )}
          />
          <Route
            path="/keyboards/addKeyboard"
            exact
            render={() => (
              <KeyboardAdd
                categories={this.state.categories}
                onAddKeyboard={this.addKeyboard}
              />
            )}
          />
          <Route
            path="/laptops/addLaptop"
            exact
            render={() => (
              <LaptopAdd
                categories={this.state.categories}
                onAddLaptop={this.addLaptop}
              />
            )}
          />

          <Route
            exact
            path="/products/edit/:id"
            render={() => (
              <ProductEdit
                categories={this.state.categories}
                onEditProduct={this.editProduct}
                product={this.state.selectedProduct}
              />
            )}
          />
          <Route
            exact
            path="/products"
            render={() => (
              <Products
                products={this.state.products}
              />
            )}
          />
          <Route
              exact
              path="/products/:id"
              render={() => (
                  <Details
                      categories={this.state.categories}
                      product={this.state.selectedProduct}/>
              )}
          />
          <Route
              exact
              path="/shoppingCart/:id"
              render={() => (
                  <ShoppingCart/>
              )}
          />

          <Route
              path="/shoppingCart/add-product/:id"
              exact
              render={() => (
                  <ShoppingCart/>
              )}
          />
          <Route
            exact
            path="/home"
            render={() => <Home products={this.state.products}
                                onAddToCart={this.addProductToCart}
                                onEdit={this.getProduct}
                                onDetails={this.getProduct}
            />}
          />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </div>
        <Footer />
      </Router>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.loadProducts();
    this.loadCategories();
  };

  loadProducts = () => {
    EShopService.fetchProducts().then((data) => {
      this.setState({
        products: data.data,
      });
    });
  };

  loadCategories = () => {
    EShopService.fetchCategories().then((data) => {
      this.setState({
        categories: data.data,
      });
    });
  };

  addMonitor = (
    name,
    price,
    back_light_type,
    color,
    power_in_kw,
    resolution,
    category
  ) => {
    EShopService.addMonitor(
      name,
      price,
      back_light_type,
      color,
      power_in_kw,
      resolution,
      category
    ).then(() => {
      this.loadProducts();
    });
  };

  addMouse = (
    name,
    price,
    dpiresolution,
    cable_length,
    cable_type,
    is_gaming,
    category
  ) => {
    EShopService.addMouse(
      name,
      price,
      dpiresolution,
      cable_length,
      cable_type,
      is_gaming,
      category
    ).then(() => {
      this.loadProducts();
    });
  };

  addKeyboard = (
    name,
    price,
    spill_resistant,
    is_gaming,
    cable_length_in_cm,
    number_of_keys,
    category
  ) => {
    EShopService.addKeyboard(
      name,
      price,
      spill_resistant,
      is_gaming,
      cable_length_in_cm,
      number_of_keys,
      category
    ).then(() => {
      this.loadProducts();
    });
  };

  addLaptop = (
    name,
    price,
    cpu,
    gpu,
    ram,
    dimensions,
    operating_system,
    storage,
    weight_in_kg,
    category
  ) => {
    EShopService.addLaptop(
      name,
      price,
      cpu,
      gpu,
      ram,
      dimensions,
      operating_system,
      storage,
      weight_in_kg,
      category
    ).then(() => {
      this.loadProducts();
    });
  };

  getProduct = (id) => {
    EShopService.getProduct(id).then((data) => {
      this.setState({
        selectedProduct: data.data,
      });
    });
  };

  editProduct = (id, price) => {
    EShopService.editProduct(id, price).then(() => {
      this.loadProducts();
    });
  };

  addProductToCart = (productId) => {
    EShopService.addToCart(productId).then(() => {
      this.loadProducts();
    });
  };
}

export default App;