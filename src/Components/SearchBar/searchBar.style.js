import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    margin: "8% 7% 0",
    display: "flex",
    justifyContent: "space-between",
  },
  root: {
    alignSelf: "center",
    background: "#8ac6d1",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "57px",
    marginBottom: "3%",
    width: "20%",
    "&:hover": {
      background: "#2694ab",
    },
  },
  text_field: {
    width: "30%",
  },
});
