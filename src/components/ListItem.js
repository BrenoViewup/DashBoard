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

class ListItem extends React.Component {
  static propTypes = {
    icons: PropTypes.Object
  };
  static defaultProps = {
    icons: [
      {
        title: "Redes",
        url:
          "https://uploads.codesandbox.io/uploads/user/15c3d4f7-c11e-48fc-91fa-2a7e4ec85188/Tfxq-Fill%20534%20Copy%203.png"
      }
    ]
  };
  render() {
    const { icons } = this.props;
    return (
      <div>
        {icons.map(icon => (
          <ListItemMaterial button>
            <ListItemIcon>
              <img src={icon.url} />
            </ListItemIcon>
            <ListItemText primary={icon.title} />
          </ListItemMaterial>
        ))}
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(ListItem);
