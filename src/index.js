import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products.contexts";

import "./index.css";
import App from "./App";
import CartProvider from "./contexts/cart.context";

ReactDOM.render(
  <BrowserRouter>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
