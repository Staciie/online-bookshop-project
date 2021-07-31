import { React, useEffect } from "react";
import { useDispatch } from "react-redux";

import { logout } from "../store/uiSlice";
import { bookAsync, resetStore } from "../store/bookSlice";
import { BookList } from "../components";
import { SimpleSlider } from "../components/Slider/Slider";

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookAsync());
    dispatch(resetStore());
    dispatch(logout());
  }, []);

  return (
    <>
      <SimpleSlider />
      <BookList />
    </>
  );
}
