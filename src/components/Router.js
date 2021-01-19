import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./carts/Cart";
import ProductList from "./products/ProductList";
import Slides from "./slides/Slides";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Slides />
        <ProductList />
      </Route>
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};

export default Router;
