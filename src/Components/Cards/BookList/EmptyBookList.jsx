import { React } from "react";
import { Box, Typography } from "@material-ui/core";

import { useStyles } from "./bookList.style";

export function EmptyBookList() {
  const classes = useStyles();

  return (
    <Box className={classes.empty_container}>
      <Typography variant="h5" component="h5">
        No results found
      </Typography>
    </Box>
  );
}
