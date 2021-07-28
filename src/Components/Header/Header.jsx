import { React } from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "../../constants/routes";
import { StyledBadge } from "../StyledComponents/StyledBadge";
import { useStyles } from "./header.style";
import { cartItemsSelector } from "../../store/selectors";

export function Header() {
  const classes = useStyles();
  const cartQuantity = useSelector(cartItemsSelector);

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item}>
        <Link to={ROUTES.homePath} style={{ textDecoration: "none" }}>
          <Typography display="inline" className={classes.logo_title}>
            Book<span className={classes.logo_title_span}>Pitch</span>
          </Typography>
        </Link>
      </Grid>

      <Grid item className={classes.item_right}>
        <Link to={ROUTES.contactsPath} className={classes.link}>
          Contacts
        </Link>

        <Link to={ROUTES.cartPath}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartQuantity} color="primary">
              <ShoppingCartTwoToneIcon
                fontSize="medium"
                style={{ color: "#359FB9" }}
              />
            </StyledBadge>
          </IconButton>
        </Link>

        <Link to={ROUTES.loginPath}>
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
