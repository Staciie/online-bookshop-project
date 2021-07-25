import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    background: "#8ac6d1",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    marginTop: "3%",
    width: "100%",
    padding: "0 30px",
    "&:hover": {
      background: "#2694ab",
    },
  },
});
