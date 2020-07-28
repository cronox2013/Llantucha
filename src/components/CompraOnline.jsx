import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getProductById, getCategories } from "../controllers/product.controller";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  root: {
    
    textAlign : "center", 
    width: 400
  },
  buy: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 60,
    width : 390,
    padding: '0 30px',
    textAlign : "center", 
  }
}));

export default function CompraOnline(props) {
    const classes = useStyles();
  
  return (
    <Card className={classes.root}>
    <CardContent>
      <Typography variant="h5" component="h2">
        Precio Por Unidad
        <br />
      </Typography>
      <Typography variant="h4" component="h1">

        {props.precio} Bs.
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
      <br />
        *No se admiten Devoluciones
      </Typography>
    </CardContent>
    <CardActions>
      <Button className={classes.buy} size="large">Comprar</Button>
    </CardActions>
  </Card>
  );
}
