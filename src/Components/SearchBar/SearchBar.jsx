import { React, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Grid, Button, TextField } from "@material-ui/core";

import { throttle } from "../../settings/throttle";
import { bookAsync, resetList } from "../../store/bookSlice";
import { useStyles } from "./searchBar.style";

export function SearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleChange(event) {
    const { value } = event.target;
    dispatch(resetList());
    dispatch(bookAsync(value));
  }

  const optimizedVersion = useCallback(throttle(handleChange, 500), []);

  return (
    <Grid className={classes.container}>
      <Button className={classes.root}>Show favorites</Button>
      <TextField
        type="text"
        className={classes.text_field}
        placeholder="Search"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onChange={optimizedVersion}
      />
    </Grid>
  );
}
