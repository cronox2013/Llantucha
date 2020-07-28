import React from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import ProductCard from "../components/ProductCard";


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    //flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "space-between"
  }
}));

export default function ProductBoard(props) {
  const {products} = props;
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      {products.map(r => (
        <ProductCard
          key={r.id}
          id={r.id}
          title={r.title}
          image={r.image}
          content={r.content}
        />
      ))}
    </Container>
  );
}
