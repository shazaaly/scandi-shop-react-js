import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "../components/ProductItem.module.css";

export default function ProductItem(props) {
  return (
    <Fragment>
      <div className={classes.productCardContainer}>
        <Link to={`${props.title}/${props.id}`}>
          <div className={classes.item} key={props.id}>
            <div className={classes.imageContainer}>
              <img
                className={classes.productImage}
                src={props.src}
                alt="product"
              />
            </div>

            <div className="name">{props.title} </div>
            <div className="price">{props.price}</div>
          </div>
        </Link>
        <button className={classes.cartButton}>Add to cart</button>
      </div>
    </Fragment>
  );
}
