import React from "react";
import ProductBoard from "../components/ProductBoard";
import SearchBar from "../components/SearchBar";
import searchBarBackground from "../static/abarrotes.jpg";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { getProducts, getProductsByCategory } from "../controllers/product.controller";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  searchRoot: {
    backgroundImage: `url(${searchBarBackground})`,
    textAlign: "center",
  },
  searchTitle: {
    color: "white",
    fontSize: 70,
  },
  searchBar: {
    width: "50rem",
    margin: "auto",
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
  },
}));

export default function ProductListPage() {
  const classes = useStyles();
  const [category, setCategory] = React.useState(0);
  const [products, setProducts] = React.useState([]);

  function handleChange(_, newValue) {
    setCategory(newValue);
  }

  React.useEffect(() => {
    async function fetchData(){
      if (category === 0) {
        setProducts(await getProducts());
      } else {
        setProducts(await getProductsByCategory(category - 1));
      }
    }
    fetchData()
  }, [category],console.log(products));

  return (
    <div>
      <div className={classes.searchRoot}>
        <Typography component="h1" variant="h1" className={classes.searchTitle}>
          ¿Qué vas a comprar hoy?
        </Typography>
        <div className={classes.searchBar}>
          <SearchBar />
        </div>
      </div>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          value={category}
          onChange={handleChange}
          aria-label="Vertical tabs"
          className={classes.tabs}>
          <Tab label="Todos" />
          <Tab label="Limpieza" />
          <Tab label="Snacks" />
          <Tab label="Papel" />
          <Tab label="Higiene" />
          <Tab label="Bebidas" />
          <Tab label="Alimentos" />
          <Tab label="Varios" />
        </Tabs>
        <ProductBoard products={products} />
      </div>
    </div>
  );
}
