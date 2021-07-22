import { Grid, Typography, IconButton } from "@material-ui/core";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import PersonOutlineTwoToneIcon from "@material-ui/icons/PersonOutlineTwoTone";
import { Link } from "react-router-dom";
import { Routes } from "../../Constants/Routes";
import { StyledBadge } from "./StyledBadge";
import { useStyles } from "./HeaderStyle";

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
