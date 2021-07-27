import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    background: "#8ac6d1",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    margin: "3% 0",
    width: "100%",
    padding: "0 30px",
    "&:hover": {
      background: "#2694ab",
    },
  },
  button_container: {
    margin: "3% 0",
  },
});
