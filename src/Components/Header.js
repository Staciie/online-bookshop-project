import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  makeStyles,
  Badge,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";

const useStyles = makeStyles({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1% 4%",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "#FFFFFF",
    maxHeight: "6em",
    boxShadow: "-1px -3px 10px #1e8494, 1px 3px 10px #4ABEE5;",
  },
  item: {
    width: "50%",
  },
  item_right: {
    width: "50%",
    textAlign: "end",
  },
  logo_title: {
    fontFamily: "'Josefin Sans', sans-serif",
    color: "#33E3FF",
    fontWeight: "400",
    fontSize: "2em",
  },
  logo_title_span: {
    fontWeight: "200",
  },
  link: {
    marginRight: "6%",
    textDecoration: "none",
    color: "#313438",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const StyledBadge = withStyles(() => ({
  badge: {
    right: "-3px",
    backgroundColor: "#9B9B9B",
  },
}))(Badge);

export function Header() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item}>
        <Link to={Routes.homePath} style={{ textDecoration: "none" }}>
          <Typography display="inline" className={classes.logo_title}>
            Book<span className={classes.logo_title_span}>Pitch</span>
          </Typography>
        </Link>
      </Grid>

      <Grid item className={classes.item_right}>
        <Link to={Routes.contactsPath} className={classes.link}>
          Contacts
        </Link>

        <Link to={Routes.cartPath}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={1} color="primary">
              <ShoppingCartTwoToneIcon
                fontSize="medium"
                style={{ color: "#359FB9" }}
              />
            </StyledBadge>
          </IconButton>
        </Link>

        <Link to={Routes.loginPath}>
          <IconButton aria-label="login">
            <PersonOutlineTwoToneIcon
              fontSize="medium"
              style={{ color: "#359FB9" }}
            />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
}
