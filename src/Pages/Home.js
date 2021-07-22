import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bookAsync } from "../store/books-slice";
import { BookList } from "../Components";

export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bookAsync());
  }, []);
  return <BookList />;
}
