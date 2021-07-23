import { React, useEffect } from "react";
import { useDispatch } from "react-redux";

import { bookAsync } from "../store/bookSlice";
import { BookList } from "../components";
import { SimpleSlider } from "../components/Slider/Slider";

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookAsync());
  }, []);

  return (
    <>
      <SimpleSlider />
      <BookList />
    </>
  );
}
