/* eslint-disable no-unused-expressions */
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";

import { useStyles } from "./home.style";
import {
  showButtonSelector,
  loadingSelector,
  bookListSelector,
  favoritesListSelector,
  showFavoriteSelector,
} from "../../store/selectors";
import { bookAsync, resetList } from "../../store/bookSlice";
import { BookList } from "../../Components";
import { SimpleSlider } from "../../Components/Slider/Slider";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Loader } from "../../Components/Loader";
import { EmptyBookList } from "../../Components/Cards/BookList/EmptyBookList";

export function Home() {
  const [searchValue, setSearchValue] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const bookList = useSelector(bookListSelector);
  const isLoading = useSelector(loadingSelector);
  const showAddButton = useSelector(showButtonSelector);
  const favoritesList = useSelector(favoritesListSelector);
  const showFavorite = useSelector(showFavoriteSelector);

  useEffect(() => {
    dispatch(resetList());
    dispatch(bookAsync());
  }, []);

  useEffect(() => {
    showFavorite && (dispatch(resetList()), dispatch(bookAsync()));
  }, [favoritesList]);

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
