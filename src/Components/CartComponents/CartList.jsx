/* eslint-disable react/no-children-prop */
import { React } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

import { ROUTES } from "../../constants/Routes";
import { emptyCart } from "../../store/cartSlice";
import { CartItem } from "./CartItem";
import { useStyles } from "./styles/cartList.style";

export function CartList({ totalPrice, cartItems }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <>
      <Button
        className={classes.root}
        style={{ width: "auto", alignSelf: "flex-end" }}
        component={Link}
        to={ROUTES.checkoutPath}
      >
        Checkout (total: ${totalPrice.toFixed(2)})
      </Button>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <Grid container className={classes.button_container} alignItems="center">
        <Button
          className={classes.root}
          style={{
            width: "auto",
            margin: " 0 2% 0 0",
          }}
          onClick={handleEmptyCart}
        >
          Empty cart
        </Button>
        <Link to={ROUTES.homePath} style={{ textDecoration: "none" }}>
          <Button
            className={classes.root}
            style={{ width: "auto", margin: "0" }}
          >
            Continue shopping
          </Button>
        </Link>
      </Grid>
    </>
  );
}
