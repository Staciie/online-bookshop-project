import { React } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Box,
  IconButton,
  TableContainer,
  Table,
  TableCell,
  TableRow,
  TableBody,
} from "@material-ui/core";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";

import { bookListSelector, cartListSelector } from "../../store/selectors";
import { useStyles } from "./item.style";
import { toggleAddToCart } from "../../store/cartSlice";

export function Item() {
  const classes = useStyles();
  const { id } = useParams();
  const bookId = Number(id);
  const bookList = useSelector(bookListSelector);
  const cartList = useSelector(cartListSelector);
  const bookItem = bookList.find((item) => item.id === bookId);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(toggleAddToCart({ id: bookId, price: bookItem.price }));
  };

  return !bookItem ? (
    <Box ml={3} mt={3}>
      <Typography variant="h6" component="h6">
        No item with the given ID could be found
      </Typography>
    </Box>
  ) : (
    <Box className={classes.container}>
      <img
        className={classes.media}
        component="img"
        alt={bookItem.title}
        title={bookItem.title}
        src={bookItem.imgUrl}
      />
      <Box className={classes.content_container}>
        <Box mb={2}>
          <Typography variant="h3" component="h3">
            {bookItem.title}
          </Typography>
          <Typography m={2} variant="h5" component="h5">
            {bookItem.author}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="h6" component="h6">
            ${bookItem.price.toFixed(2)}
          </Typography>
        </Box>

        <Box ml={-1.5} mb={2}>
          <IconButton aria-label="favorite" className={classes.icon_button}>
            <GradeTwoToneIcon className={classes.icon} />
          </IconButton>
          <IconButton aria-label="share" className={classes.icon_button}>
            <ShareTwoToneIcon className={classes.icon} />
          </IconButton>
          <IconButton
            aria-label="cart"
            onClick={handleAddToCart}
            className={classes.icon_button}
          >
            {!cartList.find((item) => item.id === bookId) ? (
              <ShoppingCartTwoToneIcon className={classes.icon} />
            ) : (
              <DoneOutlineTwoToneIcon className={classes.selected_icon} />
            )}
          </IconButton>
        </Box>
        <Box mb={1}>
          <Typography variant="h5" component="h5">
            Description:
          </Typography>
        </Box>
        <Typography variant="body1" component="p">
          {bookItem.description}
        </Typography>
        <Box mb={1} mt={3}>
          <Typography variant="h5" component="h5">
            Product Details:
          </Typography>
        </Box>

        <TableContainer>
          <Table
            className={`${classes.root} ${classes.customTable}`}
            size="small"
            aria-label="a dense table"
          >
            <TableBody>
              <TableRow className={classes.root}>
                <TableCell component="th" scope="row">
                  Genre:
                </TableCell>
                <TableCell component="th" scope="row">
                  <strong>{bookItem.genre}</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Publish year:
                </TableCell>
                <TableCell component="th" scope="row">
                  <strong> {bookItem.yearOfPublishing}</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Price:
                </TableCell>
                <TableCell component="th" scope="row">
                  <strong> ${bookItem.price.toFixed(2)}</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Author homeland:
                </TableCell>
                <TableCell component="th" scope="row">
                  <strong>{bookItem.authorHomeland}</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
