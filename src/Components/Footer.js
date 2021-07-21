import React from "react";
import { Grid, Link, Typography, makeStyles } from "@material-ui/core";
// import { Logo } from "./Logo";

const useStyles = makeStyles({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2% 4%",
    position: "absolute",
    bottom: "0",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#D5D5D5",
  },
  copy: {
    fontFamily: "'Josefin Sans', sans-serif",
  },
  item_right: {
    width: "60%",
    textAlign: "end",
  },
  link: {
    marginRight: "4%",
    textDecoration: "none",
    fontSize: ".9em",
    color: "#313438",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

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
        <Link to="/#" className={classes.link}>
          Privacy
        </Link>
        <Link to="/#" className={classes.link}>
          Terms
        </Link>
        <Link to="/contacts" className={classes.link}>
          Support
        </Link>
        <Link to="/#" className={classes.link}>
          Sign Up
        </Link>
        <Link to="/#" className={classes.link}>
          Sign In
        </Link>
        <Link to="/cart" />
        <Link to="/login" />
      </Grid>
    </Grid>
  );
}
