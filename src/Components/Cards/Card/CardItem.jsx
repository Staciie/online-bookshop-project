import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import StarIcon from "@material-ui/icons/Star";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";

import { useStyles } from "./cardItem.style";
import { toggleAddToCart } from "../../../store/cartSlice";
import { toggleAddToFavorites } from "../../../store/bookSlice";
import {
  cartListSelector,
  favoritesListSelector,
} from "../../../store/selectors";

export function CardItem({ id, title, imgUrl, author, description, price }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const { push } = useHistory();

  const cartItems = useSelector(cartListSelector);
  const favorites = useSelector(favoritesListSelector);

  const handleCardClick = () => {
    push(`${path}/${id}`);
  };

  const handleAddToCart = () => {
    dispatch(toggleAddToCart({ id, price }));
  };
  const handleAddToFav = () => {
    dispatch(toggleAddToFavorites({ id }));
  };
  return (
    <Grid item className={classes.card_container}>
      <img
        className={classes.card_media}
        component="img"
        alt={title}
        src={imgUrl}
        title={title}
      />
      <Card className={classes.card_content}>
        <CardActionArea onClick={handleCardClick}>
          <CardContent>
            <Typography variant="h5" component="h5">
              {title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="h6">
              {author}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              className={classes.price}
            >
              $ {price.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${description.slice(0, 150)}...`}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.card_actions}>
          <Grid>
            <IconButton aria-label="favorite" onClick={handleAddToFav}>
              {!favorites.find((item) => item === id) ? (
                <GradeTwoToneIcon className={classes.icon} />
              ) : (
                <StarIcon className={classes.selected_icon} />
              )}
            </IconButton>
            <IconButton aria-label="share">
              <ShareTwoToneIcon className={classes.icon} />
            </IconButton>
          </Grid>
          <IconButton aria-label="cart" onClick={handleAddToCart}>
            {!cartItems.find((item) => item.id === id) ? (
              <ShoppingCartTwoToneIcon className={classes.icon} />
            ) : (
              <DoneOutlineTwoToneIcon className={classes.selected_icon} />
            )}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
