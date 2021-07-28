import { React } from "react";
import { Box, Typography } from "@material-ui/core";

import { useStyles } from "./bookList.style";

export function EmptyBookList() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h5" component="h5">
        No match
      </Typography>
    </Box>
  );
}
