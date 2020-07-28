import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import { getProductById } from "../controllers/product.controller";
import { makeStyles } from "@material-ui/core";
import CompraOnline from "../components/CompraOnline";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%"
  },
  title: {
    fontSize: "5rem",
    margin: `${theme.spacing(5)}px 0`
  },
  subtitle: {},
  media: {
    width: "100%",
    height: 540,
    border: "none"
  },
  list: {
    fontSize: "1rem"
  }
}));

export default function ProductPage() {
  const classes = useStyles();
  const id = parseInt(useParams().id);
  const  product = getProductById(id);
  return (
    <div className={classes.root}>
      <Typography compoproductnent="h1" variant="h1" className={classes.title}>
        {product.title}
      </Typography>
      <Grid container xs={12} spacing={10} justify="space-between" direction="row">
        <Grid item xs={6}>
          <img src={product.image} alt={product.title } className={classes.media}/>
        </Grid>
        <Grid item container xs={6} direction="column">
          <Grid item>
            <Typography component="h2" variant="h2">
              Descripcion
            </Typography>
            <Typography component="p" paragraph align="justify">
              {product.content}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h2" variant="h2">
              Compra
            </Typography>
            <CompraOnline precio={product.precio}/>
            
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
