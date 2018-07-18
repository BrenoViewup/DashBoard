import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemMaterial from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const styles = theme => ({});

class NotificationItem extends React.Component {
  static propTypes = {
    notifications: PropTypes.Object
  };
  static defaultProps = {
    notifications: [
      {
        title: "Redes",
        image:
          "https://uploads.codesandbox.io/uploads/user/15c3d4f7-c11e-48fc-91fa-2a7e4ec85188/6U67-Shape.png"
      }
    ]
  };
  render() {
    const { notifications } = this.props;
    return (
      <div>
        {notifications.map((notification, index) => (
          <ListItemMaterial key={index} button style={{ padding: "5px" }}>
            <ListItemIcon>
              <img src={notification.image} />
            </ListItemIcon>
            <ListItemText primary={notification.title} />
          </ListItemMaterial>
        ))}
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NotificationItem);
