import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Switch, Route,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from './pages/ProductPage'
import ProductListPage from "./pages/ProductListPage";
import CreateUser from "./components/create-user.component";
import CreateProduct from "./components/createProduct";
import ListProduct from "./components/listProduct";
import EditProduct from "./components/editProduct";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF9800"
    },
    secondary: {
      main: "#CDDC39"
    }
  },
  typography: {
    h1: {
      fontFamily: "'Montserrat', sans-serif"
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif"
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif"
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif"
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif"
    },
    h6: {
      fontFamily: "'Montserrat', sans-serif"
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif"
    },
    body2: {
      fontFamily: "'Montserrat', sans-serif"
    }
  },
  direction: "rtl"
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/productos/:category/:id">
          <ProductPage />
        </Route>
        <Route path="/productos">
          <ProductListPage />
        </Route>
        <Route path="/adminproduct" exact>
          <ListProduct/>
        </Route>
        <Route path="/adminproduct/editproduct/:id" >
          <EditProduct/>
        </Route>
        <Route path="/adminproduct/createproduct"> 
          <CreateProduct/>
        </Route>
        <Route path="/admin/user">
          <CreateUser/>
        </Route>

      </Switch>
    </ThemeProvider>
  );
}

export default App;
