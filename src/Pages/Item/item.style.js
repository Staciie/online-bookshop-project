import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowpap",
    margin: "4%",
  },
  media: {
    boxShadow: "4px 0px 29px 3px rgba(66,66,66,0.84)",
    height: "20em",
  },
  content_container: {
    flexDirection: "column",
    marginLeft: "3%",
  },
  icon: {
    color: "#359FB9",
  },
  icon_button: {
    marginRight: "5%",
  },
  selected_icon: {
    color: "#9dd3a8",
  },
  root: {
    width: "auto",
    boxShadow: "none",
  },
  customTable: {
    "& .MuiTableCell-sizeSmall": {
      padding: "1px 10px 1px 0",
    },
  },
});
