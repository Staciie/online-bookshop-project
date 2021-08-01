import { React, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, TextField } from "@material-ui/core";

import { changeSort } from "../../store/uiSlice";
import { throttle } from "../../settings/Throttle";
import { bookAsync, resetList } from "../../store/bookSlice";
import { useStyles } from "./searchBar.style";
import { showFavoriteSelector } from "../../store/selectors";

export function SearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const showFavorite = useSelector(showFavoriteSelector);

  function handleChange(event) {
    const { value } = event.target;
    dispatch(resetList());
    dispatch(bookAsync(value));
  }

  function handleShowFav() {
    dispatch(changeSort());
    dispatch(resetList());
    dispatch(bookAsync());
  }
  const optimizedVersion = useCallback(throttle(handleChange, 1000), []);

  return (
    <Grid className={classes.container}>
      <Button className={classes.root} onClick={handleShowFav}>
        {!showFavorite ? `Show favorites` : `Show all`}
      </Button>
      <TextField
        variant="outlined"
        type="text"
        className={classes.text_field}
        label="Search"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={optimizedVersion}
      />
    </Grid>
  );
}
