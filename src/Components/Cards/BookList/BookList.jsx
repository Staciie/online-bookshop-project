/* eslint-disable react/jsx-props-no-spreading */
import { React } from "react";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

import { CardItem } from "../Card/CardItem";
import { useStyles } from "./bookList.style";
import { bookListSelector } from "../../../store/selectors";

export function BookList() {
  const classes = useStyles();
  const list = useSelector(bookListSelector);

  return (
    <Box className={classes.container}>
      {list.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </Box>
  );
}
