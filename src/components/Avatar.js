import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  listItemText: {
    flex: " initial",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
});

class AvatarDrawer extends React.Component {
  state = {
    open: false,
    disablePortal: false
  };
  static propTypes = {
    user: PropTypes.Object
  };
  static defaultProps = {
    user: {
      name: "Breno",
      image: {
        url:
          "https://uploads.codesandbox.io/uploads/user/15c3d4f7-c11e-48fc-91fa-2a7e4ec85188/0BcX-Oval%207.png",
        alt: "Imagem de perfil"
      }
    }
  };
  handleToggle = () => {
    this.setState(state => ({
      open: !state.open,
      disablePortal: !state.disablePortal
    }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false, disablePortal: false });
  };

  // state = {
  //   checked: [1]
  // };

  // handleToggle = value => () => {
  //   const { checked } = this.state;
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   this.setState({
  //     checked: newChecked
  //   });
  // };

  render() {
    const { classes, user } = this.props;
    const { open, disablePortal } = this.state;
    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <div className={classes.root}>
              <Avatar alt={user.image.alt} src={user.image.url} />
              <ListItemText
                className={classes.listItemText}
                disableTypography
                primary={user.name}
              />
            </div>
          </Button>
          <Popper
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal={this.state.disablePortal}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper
                  style={{
                    background: "#13213E",
                    width: "150px"
                  }}
                >
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>My account</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

AvatarDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AvatarDrawer);
