import { makeStyles } from "@material-ui/styles";

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
  // root: {
  //   background: "#8ac6d1",
  //   borderRadius: 3,
  //   border: 0,
  //   color: "white",
  //   height: 40,
  //   marginTop: "3%",
  //   width: "100%",
  //   padding: "0 30px",
  //   "&:hover": {
  //     background: "#2694ab",
  //   },
  // },
});
