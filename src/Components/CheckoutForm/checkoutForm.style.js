import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  form_container: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "2%",
    width: "100%",
    alignSelf: "center",
  },
  root: {
    alignSelf: "center",
    background: "#8ac6d1",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    marginBottom: "3%",
    width: "100%",
    padding: "0 30px",
    "&:hover": {
      background: "#2694ab",
    },
  },
  title: {
    marginTop: "3%",
  },
  action_container: {
    padding: "0",
  },
  title_container: {
    padding: "0 24px",
  },
  icon: {
    color: "#359FB9",
    verticalAlign: "middle",
    padding: "0 2% 1% 0",
  },
});
