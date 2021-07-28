import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";

import { useStyles } from "./home.style";
import {
  showButtonSelector,
  loadingSelector,
  bookListSelector,
} from "../../store/selectors";
import { bookAsync, resetList } from "../../store/bookSlice";
import { BookList } from "../../components";
import { SimpleSlider } from "../../components/Slider/Slider";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Loader } from "../../components/Loader";
import { EmptyBookList } from "../../components/Cards/BookList/EmptyBookList";

export function Home() {
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const bookList = useSelector(bookListSelector);
  const isLoading = useSelector(loadingSelector);
  const showAddButton = useSelector(showButtonSelector);

  useEffect(() => {
    dispatch(resetList());
    dispatch(bookAsync());
  }, []);

  const handleAddButton = (event) => {
    event.preventDefault();
    dispatch(bookAsync());
  };

  return (
    <Grid className={classes.container}>
      <SimpleSlider />
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {isLoading && <Loader />}

      {!isLoading && bookList.length === 0 && <EmptyBookList />}
      {!isLoading && (
        <>
          <BookList />
          {showAddButton && (
            <Button className={classes.root} onClick={handleAddButton}>
              Load More
            </Button>
          )}
        </>
      )}
    </Grid>
  );
}
