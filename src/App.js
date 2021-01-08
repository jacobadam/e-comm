import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Error from "./Components/Error";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ProductList />
        <Details />
        <Cart />
        <Error />
      </React.Fragment>
    );
  }
}

export default App;
