import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontFamily: "'Pacifico', cursive",
      fontSize: "4rem",
      padding: "1rem 0"
    },
    link: {
      textDecorationLine: "none",
      color: "unset",
      "& :hover": {
        color: "unset"
      }
    }
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" component="nav">
      <div style={{ textAlign: "center" }}>
        <Link to="/productos" className={classes.link}>
          <Typography className={classes.title} component="h1">
            Llantuchita
          </Typography>
        </Link>
      </div>
    </AppBar>
  );
}
