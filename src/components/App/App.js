import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../SiteStructure/Footer/Footer";
import Header from "../SiteStructure/Header/Header";
import classes from "./App.module.css";
import { createBrowserHistory } from "history";

const newHistory = createBrowserHistory();

function App() {
  return (
    <Router history={newHistory}>
      <Header />
      <div className={classes.mainContainer}>
        <Switch>
          <Route exact path="">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
