import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "../components/ProductItem.module.css";
import { CartContext } from "../contexts/cart.context";

export default function ProductItem({product}) {

  const { addItemToCart } = useContext(CartContext)
  const {id, title, price,src } = product
  const addProductToCart = () => addItemToCart(product);


  return (
    <Fragment>
      <div className={classes.productCardContainer}>
        <Link to={`${title}/${id}`}>
          <div className={classes.item} key={id}>
            <div className={classes.imageContainer}>
              <img
                className={classes.productImage}
                src={src}
                alt="product"
              />
            </div>

            <div className="name">{title} </div>
            <div className="price">{price}</div>
          </div>
        </Link>
        <button onClick={addProductToCart} className={classes.cartButton}>Add to cart</button>
      </div>
    </Fragment>
  );
}
