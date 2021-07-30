/* eslint-disable no-unused-expressions */

import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";

import { useStyles } from "./home.style";
import { showButtonSelector, pageSelector } from "../../store/selectors";
import { bookAsync, incrementPage, resetList } from "../../store/bookSlice";
import { BookList } from "../../components";
import { SimpleSlider } from "../../components/Slider/Slider";
import { emptyCart } from "../../store/cartSlice";

export function Home() {
  const classes = useStyles();
  const page = useSelector(pageSelector);
  const dispatch = useDispatch();
  const showAddButton = useSelector(showButtonSelector);

  useEffect(() => {
    dispatch(emptyCart());
    page > 1
      ? (dispatch(resetList()), dispatch(bookAsync()))
      : dispatch(bookAsync());
  }, []);

  const handleAddButton = (event) => {
    event.preventDefault();
    dispatch(bookAsync());
    dispatch(incrementPage());
  };

  return (
    <Grid className={classes.container}>
      <SimpleSlider />
      <BookList />
      {showAddButton && (
        <Button className={classes.root} onClick={handleAddButton}>
          Load More
        </Button>
      )}
    </Grid>
  );
}
