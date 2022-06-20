import React from "react";
import ProductItem from "./ProductItem";
import classes from "../components/AllProducts.module.css";

// import SHOP_DATA from "../../src/shop-data.json";

import { useContext } from "react";
import { ProductsContext } from "../contexts/products.contexts";

export default function ProductsList() {
  const {products} = useContext(ProductsContext);
  return (
    <div className={classes.productsContainer}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
