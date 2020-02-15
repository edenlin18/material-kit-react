"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionTabs;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Face = _interopRequireDefault(require("@material-ui/icons/Face"));

var _Chat = _interopRequireDefault(require("@material-ui/icons/Chat"));

var _Build = _interopRequireDefault(require("@material-ui/icons/Build"));

var _GridContainer = _interopRequireDefault(require("../../../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../../../components/Grid/GridItem.js"));

var _CustomTabs = _interopRequireDefault(require("../../../components/CustomTabs/CustomTabs.js"));

var _tabsStyle = _interopRequireDefault(require("../../../assets/jss/material-kit-react/views/componentsSections/tabsStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_tabsStyle.default);

function SectionTabs() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.section
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    id: "nav-tabs"
  }, _react.default.createElement("h3", null, "Navigation Tabs"), _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, _react.default.createElement("h3", null, _react.default.createElement("small", null, "Tabs with Icons on Card")), _react.default.createElement(_CustomTabs.default, {
    headerColor: "primary",
    tabs: [{
      tabName: "Profile",
      tabIcon: _Face.default,
      tabContent: _react.default.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Messages",
      tabIcon: _Chat.default,
      tabContent: _react.default.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "Settings",
      tabIcon: _Build.default,
      tabContent: _react.default.createElement("p", {
        className: classes.textCenter
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }]
  })), _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, _react.default.createElement("h3", null, _react.default.createElement("small", null, "Tabs on Plain Card")), _react.default.createElement(_CustomTabs.default, {
    plainTabs: true,
    headerColor: "danger",
    tabs: [{
      tabName: "Home",
      tabContent: _react.default.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Updates",
      tabContent: _react.default.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "History",
      tabContent: _react.default.createElement("p", {
        className: classes.textCenter
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }]
  }))))));
}