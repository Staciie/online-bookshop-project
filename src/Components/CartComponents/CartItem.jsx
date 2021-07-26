import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Typography, IconButton, ButtonGroup } from "@material-ui/core";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import BackspaceTwoToneIcon from "@material-ui/icons/BackspaceTwoTone";

import { useStyles } from "./styles/cartItem.style";
import { bookListSelector, cartListSelector } from "../../store/selectors";
import {
  incrememtCount,
  decrememtCount,
  removeFromCart,
} from "../../store/cartSlice";

export function CartItem({ id }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const bookList = useSelector(bookListSelector);
  const cartList = useSelector(cartListSelector);

  const itemInfo = bookList.find((item) => item.id === id);
  const checkoutInfo = cartList.find((item) => item.id === id);

  return (
    <Grid className={classes.container}>
      <Grid>
        <img
          className={classes.img}
          component="img"
          alt={itemInfo.title}
          title={itemInfo.title}
          src={itemInfo.imgUrl}
        />
      </Grid>
      <Grid className={classes.title_container}>
        <Typography variant="h4" component="h5" className={classes.text}>
          {itemInfo.title}
        </Typography>
        <Typography variant="h6" component="p" className={classes.text}>
          {itemInfo.author}
        </Typography>
      </Grid>
      <Grid className={classes.quantity_container}>
        <ButtonGroup>
          <IconButton onClick={() => dispatch(decrememtCount(id))}>
            <RemoveOutlinedIcon fontSize="medium" />
          </IconButton>
          <IconButton onClick={() => dispatch(incrememtCount(id))}>
            <AddOutlinedIcon fontSize="medium" />
          </IconButton>
        </ButtonGroup>
      </Grid>
      <Grid className={classes.price_container}>
        <Typography variant="h6" component="p">
          {checkoutInfo.count} &#xD7;
        </Typography>
        <Typography variant="h5" component="p" className={classes.text}>
          &nbsp; $ {checkoutInfo.totalPrice.toFixed(2)}
        </Typography>
      </Grid>
      <IconButton onClick={() => dispatch(removeFromCart(id))}>
        <BackspaceTwoToneIcon fontSize="medium" />
      </IconButton>
    </Grid>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
};
