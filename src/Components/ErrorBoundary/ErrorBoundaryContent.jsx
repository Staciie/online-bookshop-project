import { Typography, Grid, Button } from "@material-ui/core";
import { React } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { history } from "../../store/history";
import { ROUTES } from "../../constants/Routes";
import { useStyles } from "./errorBoundary.style";
import ErrorImg from "../../Assets/404.PNG";

export function ErrorBoundaryContent() {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Typography className={classes.text} variant="h4" component="h4">
        404 error
      </Typography>
      <Typography className={classes.text} variant="h4" component="h4">
        page not found
      </Typography>
      <img
        className={classes.media}
        component="img"
        alt="404"
        title="404"
        src={ErrorImg}
      />
      <Button
        onClick={() => {
          history.push(`${ROUTES.homePath}`);
        }}
        className={classes.root}
      >
        <ArrowBackIosIcon fontSize="small" />
        Go back
      </Button>
    </Grid>
  );
}
