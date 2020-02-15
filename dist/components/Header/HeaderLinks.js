"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderLinks;

var _react = _interopRequireDefault(require("react"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _icons = require("@material-ui/icons");

var _CustomDropdown = _interopRequireDefault(require("../CustomDropdown/CustomDropdown.js"));

var _Button = _interopRequireDefault(require("../CustomButtons/Button.js"));

var _headerLinksStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/headerLinksStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
// react components for routing our app without refresh
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_headerLinksStyle.default);

function HeaderLinks(props) {
  var classes = useStyles();
  return _react.default.createElement(_List.default, {
    className: classes.list
  }, _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_CustomDropdown.default, {
    noLiPadding: true,
    buttonText: "Components",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _icons.Apps,
    dropdownList: [_react.default.createElement(_reactRouterDom.Link, {
      to: "/",
      className: classes.dropdownLink
    }, "All components"), _react.default.createElement("a", {
      href: "https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar",
      target: "_blank",
      className: classes.dropdownLink
    }, "Documentation")]
  })), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Button.default, {
    href: "https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar",
    color: "transparent",
    target: "_blank",
    className: classes.navLink
  }, _react.default.createElement(_icons.CloudDownload, {
    className: classes.icons
  }), " Download")), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Tooltip.default, {
    id: "instagram-twitter",
    title: "Follow us on twitter",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, _react.default.createElement(_Button.default, {
    href: "https://twitter.com/CreativeTim?ref=creativetim",
    target: "_blank",
    color: "transparent",
    className: classes.navLink
  }, _react.default.createElement("i", {
    className: classes.socialIcons + " fab fa-twitter"
  })))), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Tooltip.default, {
    id: "instagram-facebook",
    title: "Follow us on facebook",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, _react.default.createElement(_Button.default, {
    color: "transparent",
    href: "https://www.facebook.com/CreativeTim?ref=creativetim",
    target: "_blank",
    className: classes.navLink
  }, _react.default.createElement("i", {
    className: classes.socialIcons + " fab fa-facebook"
  })))), _react.default.createElement(_ListItem.default, {
    className: classes.listItem
  }, _react.default.createElement(_Tooltip.default, {
    id: "instagram-tooltip",
    title: "Follow us on instagram",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, _react.default.createElement(_Button.default, {
    color: "transparent",
    href: "https://www.instagram.com/CreativeTimOfficial?ref=creativetim",
    target: "_blank",
    className: classes.navLink
  }, _react.default.createElement("i", {
    className: classes.socialIcons + " fab fa-instagram"
  })))));
}