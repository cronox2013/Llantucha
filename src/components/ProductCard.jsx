import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { getProductById, getCategories } from "../controllers/product.controller";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: "20px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  card: {
    height: 385
  }
}));

export default function ProductCard(props) {
  const classes = useStyles();
  const categoryId = getProductById(props.id).category;
  const category = getCategories()[categoryId];

  return (
    <CardActionArea className={classes.root} href={`/productos/${category}/${props.id}`}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="producto" className={classes.avatar}>
              {props.title[0]}
            </Avatar>
          }
          title={props.title}
        />
        <CardMedia className={classes.media} image={props.image} title={props.title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" align="justify">
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
