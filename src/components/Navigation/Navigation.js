import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

export default function Navigation() {
  return (
    <Fragment>
      <div className={classes.linksContainer}>
        <Link  className={classes.navLink} to="women">
          Women
        </Link>
        <Link className={classes.navLink} to="men">
          Men
        </Link>
        <Link className={classes.navLink} to="kids">
          Kids
        </Link>
      </div>
    </Fragment>
  );
}
