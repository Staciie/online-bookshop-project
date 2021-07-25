import { React } from "react";
import { Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStyles } from "./styles/cartList.style";
import { ROUTES } from "../../constants/routes";

export function EmptyCart() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" component="h6">
        Your cart is empty
      </Typography>
      <Link
        to={ROUTES.homePath}
        style={{ textDecoration: "none", width: "100%" }}
      >
        <Button className={classes.root}>Continue shopping</Button>
      </Link>
    </>
  );
}
