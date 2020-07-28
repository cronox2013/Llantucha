import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import ProductBoard from "../components/ProductBoard";
import SearchBar from "../components/SearchBar";
import searchBarBackground from "../static/abarrotes.jpg";
import { getProductsByCategory, getProducts } from "../controllers/product.controller";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  searchRoot: {
    backgroundImage: `url(${searchBarBackground})`,
    textAlign: "center"
  },
  searchTitle: {
    color: "white",
    fontSize: 70
  },
  searchBar: {
    width: "50rem",
    margin: "auto",
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5)
  }
}));

export default function RecipeListPage(props) {
  const classes = useStyles();
  const query = useQuery();
  const [category, setCategory] = React.useState(0);
  const q = query.get("q");

  function handleChange(_, newValue) {
    setCategory(newValue);
  }

  return (
    <div>
      <div className={classes.searchRoot}>
        <Typography component="h1" variant="h1" className={classes.searchTitle}>
          ¿Qué vas a compar hoy?
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
          <Tab label="Todos" {...a11yProps(0)} />
          <Tab label="Limpieza" {...a11yProps(1)} />
          <Tab label="Snacks" {...a11yProps(2)} />
          <Tab label="Papel" {...a11yProps(3)} />
          <Tab label="Higiene" {...a11yProps(4)} />
          <Tab label="Mascotas" {...a11yProps(5)} />
          <Tab label="Comestibles" {...a11yProps(6)} />
          <Tab label="Abarrotes" {...a11yProps(7)} />
          <Tab label="Varios" {...a11yProps(8)} />
        </Tabs>
        <TabPanel value={category} index={0}>
          <ProductBoard products={getProducts()} />
        </TabPanel>
        <TabPanel value={category} index={1}>
          <ProductBoard products={getProductsByCategory(0)} />
        </TabPanel>
        <TabPanel value={category} index={2}>
          <ProductBoard products={getProductsByCategory(1)} />
        </TabPanel>
        <TabPanel value={category} index={3}>
          <ProductBoard products={getProductsByCategory(2)} />
        </TabPanel>
        <TabPanel value={category} index={4}>
          <ProductBoard products={getProductsByCategory(3)} />
        </TabPanel>
        <TabPanel value={category} index={5}>
          <ProductBoard products={getProductsByCategory(4)} />
        </TabPanel>
        <TabPanel value={category} index={6}>
          <ProductBoard products={getProductsByCategory(5)} />
        </TabPanel>
        <TabPanel value={category} index={7}>
          <ProductBoard products={getProductsByCategory(6)} />
        </TabPanel>
        <TabPanel value={category} index={8}>
          <ProductBoard products={getProductsByCategory(7)} />
        </TabPanel>
      </div>
    </div>
  );
}
