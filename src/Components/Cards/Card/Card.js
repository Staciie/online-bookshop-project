/* eslint-disable react/prop-types */
import { React } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";

import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";

import { useRouteMatch } from "react-router";
import { useStyles } from "./CardStyle";
import { history } from "../../../store/history";

export function CardItem({ id, title, imgUrl, author, description }) {
  const classes = useStyles();
  const { path } = useRouteMatch();

  const handleCardClick = (event) => {
    event.preventDefault();
    history.push(`${path}/${id}`);
  };

  return (
    <Grid item className={classes.card_container}>
      <img
        className={classes.card_media}
        component="img"
        alt={title}
        src={imgUrl}
        title={title}
      />
      <Card className={classes.card_content}>
        <CardActionArea onClick={handleCardClick}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
              {title}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="h6">
              {author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${description.slice(0, 150)}...`}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.card_actions}>
          <Grid>
            <IconButton aria-label="favorite">
              <GradeTwoToneIcon className={classes.icon} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareTwoToneIcon className={classes.icon} />
            </IconButton>
          </Grid>

          <IconButton aria-label="cart">
            <ShoppingCartTwoToneIcon className={classes.icon} />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
