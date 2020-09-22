import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import HorizontalSlider from "./components/HorizontalSliderCategories";
import ShoppingCategories from "./components/ShoppingCategories";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/about">
            <Header />
          </Route>
          <Route path="/users">
            <Header />
          </Route>
          <Route path="/product/:customRoute">
            <Header />
            <Product />
          </Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
