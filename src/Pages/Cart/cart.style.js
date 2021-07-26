import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    padding: "2% 4%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    alignSelf: "flex-start",
    marginBottom: "1%",
  },
  horizontal: {
    width: "100%",
    borderTop: "1px solid gray",
    marginBottom: "3%",
  },
  button: {
    width: "100%",
    marginTop: "3%",
  },
});
