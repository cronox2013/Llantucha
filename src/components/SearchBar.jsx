import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, fade } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => ({
  search: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: fade("#FFFFFF", 0.2),
    width: "100%"
  },
  searchIcon: {
    width: "14px",
    height: "100%",
    marginLeft: "20px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    padding: "2px 60px",
    color: "white",
    width: "100%"
  }
}));

function SearchBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.history.push(`/recetas?q=${value.replace(" ", "+")}`);
    setValue("");
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <form className={classes.search} onSubmit={handleSubmit}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Buscar…"
        value={value}
        onChange={handleChange}
        className={classes.input}
        inputProps={{ "aria-label": "buscar" }}
      />
    </form>
  );
}

export default withRouter(SearchBar);
