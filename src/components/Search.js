import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  searchInput: {
    width: "100%",
    marginBottom: "-39px",
    paddingLeft: "39px",
    borderRadius: "5px",
    backgroundColor: "#0c1d37",
    color: "#fff",
    borderWidth: "0px",
    height: "32px"
  },
  searchButton: {
    backgroundImage:
      "url('https://uploads.codesandbox.io/uploads/user/15c3d4f7-c11e-48fc-91fa-2a7e4ec85188/d7Ad-musica-searcher.png')",
    height: "13px",
    width: "13px",
    position: "relative",
    top: "-14px",
    right: "-13px"
  },
  search: {
    color: "#fff",
    width: "50%",

    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  }
});

class Search extends React.Component {
  render() {
    let { classes, theme } = this.props;
    return (
      <form action="/search" className={classes.search}>
        <input
          type="search"
          className={classes.searchInput}
          maxlength="256"
          name="query"
          placeholder="Search…"
          id="search"
          required=""
        />
        <div className={classes.searchButton} />
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Search);
