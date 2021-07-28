import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    overflow: "hidden",
  },
  empty_container: {
    display: "flex",
    justifyContent: "center",
    margin: "5% 0 10%",
  },
});
