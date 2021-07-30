import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    height: "80vh",
    alignItems: "center",
  },
  form: {
    borderRadius: "10px",
    boxShadow: "4px 0px 29px 3px rgba(66,66,66,0.84)",
    padding: "3% 5%",
  },
  input: {
    width: "100%",
    margin: "2% 0",
    alignSelf: "center",
  },
  root: {
    alignSelf: "center",
    background: "#8ac6d1",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    margin: "2% 0 3%",
    width: "100%",
    padding: "0 30px",
    "&:hover": {
      background: "#2694ab",
    },
  },
  title: {
    marginBottom: "3%",
  },
  icon: {
    color: "#359FB9",
    verticalAlign: "middle",
    padding: "0 2% 1% 0",
  },
});
