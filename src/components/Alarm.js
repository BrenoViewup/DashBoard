import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import NotificationItem from "./NotificationItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    width: "60px"
  },
  notificationCount: {
    color: "white",
    top: "10px",
    right: "30px",
    background: "#FD405D",
    position: "relative",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    fontSize: "11px"
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  }
});

class Alarm extends React.Component {
  state = {
    open: false,
    disablePortal: false
  };
  static propTypes = {
    notifications: PropTypes.Object
  };
  static defaultProps = {
    notifications: [
      {
        title: "Nova notificação do brenin",
        image: "importante"
      }
    ]
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

  render() {
    const { classes, notifications } = this.props;
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
            <img
              style={{ marginLeft: "15px" }}
              src="https://uploads.codesandbox.io/uploads/user/15c3d4f7-c11e-48fc-91fa-2a7e4ec85188/KV1k-alarm.png"
            />
            <div className={classes.notificationCount}>2</div>
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
                    width: "300px",
                    color: "white"
                  }}
                >
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      {notifications.map((notification, index) => (
                        <NotificationItem
                          key={index}
                          onClick={this.handleClose}
                        >
                          {notification.title}
                        </NotificationItem>
                      ))}
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

Alarm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Alarm);
