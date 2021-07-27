import { withStyles } from "@material-ui/styles";
import { Badge } from "@material-ui/core";

export const StyledBadge = withStyles(() => ({
  badge: {
    right: "-3px",
    backgroundColor: "#9B9B9B",
  },
}))(Badge);
