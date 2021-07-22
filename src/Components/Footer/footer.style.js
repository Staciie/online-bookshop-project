import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2% 4%",
    position: "absolute",
    bottom: "0",
    width: "100%",
    backgroundColor: "#D5D5D5",
  },
  copy: {
    fontFamily: "'Josefin Sans', sans-serif",
  },
  item_right: {
    width: "60%",
    textAlign: "end",
  },
  link: {
    marginRight: "4%",
    textDecoration: "none",
    fontSize: ".9em",
    color: "#313438",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
