import { React } from "react";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import { CardItem } from "../Card/Card";
import { useStyles } from "./BookListStyle";

export function BookList() {
  const classes = useStyles();
  const list = useSelector((state) => state.book.list);

  return (
    <Box className={classes.container}>
      {list.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </Box>
  );
}
