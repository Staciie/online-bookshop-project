import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "1% 0",
    margin: "0",
    borderTop: "1px solid rgba(107,119,141,0.4)",
  },
  text: {
    color: "#252c41",
    verticalAlign: "center",
  },
  title_container: {
    padding: "0 0 0 5%",
    width: "30%",
    flexGrow: "1",
  },
  quantity_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  img: {
    height: "12em",
    boxShadow: "4px 0px 29px 3px rgba(66,66,66,0.84)",
  },
  price_container: {
    padding: "1% 4%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
});
