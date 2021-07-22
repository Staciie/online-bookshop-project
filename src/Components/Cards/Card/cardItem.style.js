import { makeStyles } from "@material-ui/core";

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
    color: "#506C8A",
  },
  card_actions: {
    display: "flex",
    justifyContent: "space-between",
  },
});
