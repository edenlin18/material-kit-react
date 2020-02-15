"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionPills;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Dashboard = _interopRequireDefault(require("@material-ui/icons/Dashboard"));

var _Schedule = _interopRequireDefault(require("@material-ui/icons/Schedule"));

var _List = _interopRequireDefault(require("@material-ui/icons/List"));

var _GridContainer = _interopRequireDefault(require("../../../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../../../components/Grid/GridItem.js"));

var _NavPills = _interopRequireDefault(require("../../../components/NavPills/NavPills.js"));

var _pillsStyle = _interopRequireDefault(require("../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_pillsStyle.default);

function SectionPills() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.section
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    id: "navigation-pills"
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("h3", null, "Navigation Pills")), _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("h3", null, _react.default.createElement("small", null, "With Icons"))), _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6
  }, _react.default.createElement(_NavPills.default, {
    color: "primary",
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: _Dashboard.default,
      tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: _Schedule.default,
      tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Tasks",
      tabIcon: _List.default,
      tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }]
  })), _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6
  }, _react.default.createElement(_NavPills.default, {
    color: "rose",
    horizontal: {
      tabsGrid: {
        xs: 12,
        sm: 4,
        md: 4
      },
      contentGrid: {
        xs: 12,
        sm: 8,
        md: 8
      }
    },
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: _Dashboard.default,
      tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: _Schedule.default,
      tabContent: _react.default.createElement("span", null, _react.default.createElement("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), _react.default.createElement("br", null), _react.default.createElement("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }]
  }))))));
}