import React from "react";
import { Routes, Route } from "react-router-dom";
import Women from "./components/categories/Women";
import Men from "./components/categories/Men";
import Kids from "./components/categories/Kids";
import Shop from "./components/pages/Shop";
import { Fragment } from "react";
import Header from "./components/Header/Header";
import CheckOut from "./components/pages/CheckOut";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";


export default function App() {


  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Shop />} />
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="kids" element={<Kids />} />


          <Route path="checkout" element={<CheckOut />} />

          <Route
            path={`shop/:id`}
            element={<ProductDetailsPage />}
          />|


        </Route>
      </Routes>

      <div className="App-container">
        <div className="products-container">
        </div>
      </div>
    </Fragment>
  );
}
