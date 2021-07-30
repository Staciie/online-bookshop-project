import { Typography, Grid, Button } from "@material-ui/core";
import { React } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { history } from "../../store/history";
import { ROUTES } from "../../constants/routes";
import { useStyles } from "./errorBoundary.style";

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
        src="404.png"
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
