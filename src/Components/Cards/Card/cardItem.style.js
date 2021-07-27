import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  card_container: {
    display: "flex",
    maxWidth: "600px",
    padding: "20px",
    margin: "4em 0",
    alignItems: "center",
    justifyContent: "center",
  },
  card_content: {
    marginLeft: "-10em",
    paddingLeft: "10em",
    boxShadow: "3px 0px 17px -1px rgba(66,66,66,0.84)",
    borderRadius: "0",
  },
  card_media: {
    boxShadow: "4px 0px 29px 3px rgba(66,66,66,0.84)",
    zIndex: "0",
    height: "19em",
    objectPosition: "left",
    objectFit: "cover",
  },
  icon: {
    color: "#359FB9",
  },
  selected_icon: {
    color: "#9dd3a8",
  },
  card_actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    width: "70%",
  },
  price: {
    fontSize: "1.2em",
    color: "#252A34",
    fontWeight: "600",
  },
});
