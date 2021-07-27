import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  prev: {
    zIndex: "20",
    left: "5px",
  },
  next: {
    zIndex: "20",
    right: "5px",
  },
});

export function SamplePrevArrow(props) {
  const classes = useStyle();
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} ${classes.prev}`}
      onClick={onClick}
    >
      <ArrowBackIosIcon color="primary" />
    </button>
  );
}

export function SampleNextArrow(props) {
  const classes = useStyle();
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`${className} ${classes.next}`}
      onClick={onClick}
    >
      <ArrowForwardIosIcon color="primary" />
    </button>
  );
}
