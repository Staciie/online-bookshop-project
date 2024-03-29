import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1% 4%",
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "#FFFFFF",
    zIndex: "10",
    minHeight: "5em",
    boxShadow: "-1px -3px 10px #1e8494, 1px 3px 10px #4ABEE5",
  },
  item: {
    width: "50%",
  },
  item_right: {
    width: "50%",
    textAlign: "end",
  },
  logo_title: {
    fontFamily: "'Josefin Sans', sans-serif",
    color: "#33E3FF",
    fontWeight: "400",
    fontSize: "2em",
  },
  logo_title_span: {
    fontWeight: "200",
  },
  link: {
    marginRight: "6%",
    textDecoration: "none",
    color: "#313438",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
