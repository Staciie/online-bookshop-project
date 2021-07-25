/* eslint-disable no-return-assign */
import { React } from "react";
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import { useStyles } from "./cart.style";
import { EmptyCart, CartList } from "../../components";
import { cartListSelector } from "../../store/selectors";

export function Cart() {
  const classes = useStyles();

  const cartItems = useSelector(cartListSelector);
  const checkoutData = {};
  cartItems.map((item) => (checkoutData[item.id] = item.count));

  const totalPrice = cartItems.reduce((acc, obj) => acc + obj.totalPrice, 0);

  return (
    <Grid className={classes.container}>
      <Typography className={classes.title} variant="h4" component="h4">
        Shopping cart
      </Typography>
      {!cartItems.length ? (
        <EmptyCart />
      ) : (
        <CartList
          totalPrice={totalPrice}
          cartItems={cartItems}
          checkoutData={checkoutData}
        />
      )}
    </Grid>
  );
}
