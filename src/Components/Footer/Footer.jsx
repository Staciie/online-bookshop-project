/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";

import { useStyles } from "./footer.style";

export function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography className={classes.copy}>
          &#169; 2020 BookPitch Inc
        </Typography>
      </Grid>
      <Grid item className={classes.item_right}>
        <Link to="#" className={classes.link}>
          Privacy
        </Link>
        <Link to="#" className={classes.link}>
          Terms
        </Link>
        <Link to="#" className={classes.link}>
          Support
        </Link>
        <Link to="#" className={classes.link}>
          Sign Up
        </Link>
        <Link to="#" className={classes.link}>
          Sign In
        </Link>
      </Grid>
    </Grid>
  );
}
