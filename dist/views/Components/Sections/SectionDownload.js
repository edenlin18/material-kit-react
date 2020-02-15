"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionDownload;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _GridContainer = _interopRequireDefault(require("../../../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../../../components/Grid/GridItem.js"));

var _Button = _interopRequireDefault(require("../../../components/CustomButtons/Button.js"));

var _downloadStyle = _interopRequireDefault(require("../../../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_downloadStyle.default);

function SectionDownload() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.section
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_GridContainer.default, {
    className: classes.textCenter,
    justify: "center"
  }, _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, _react.default.createElement("h2", null, "Do you love this UI Kit?"), _react.default.createElement("h4", null, "Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. We also have the Bootstrap 4 version on plain HTML. Start a new project or give an old Bootstrap project a new look!")), _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 8,
    md: 6
  }, _react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section",
    target: "_blank"
  }, "Free React Download"), _react.default.createElement(_Button.default, {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit?ref=mkr-download-section",
    target: "_blank"
  }, "Free HTML Downoad"))), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_GridContainer.default, {
    className: classes.textCenter,
    justify: "center"
  }, _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8
  }, _react.default.createElement("h2", null, "Want more?"), _react.default.createElement("h4", null, "We", "'", "ve launched", " ", _react.default.createElement("a", {
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section",
    target: "_blank"
  }, "Material Kit PRO React", " "), ".It has a huge number of components, sections and example pages. Start Your Development With A Badass Material-UI nspired by Material Design.")), _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 8,
    md: 6
  }, _react.default.createElement(_Button.default, {
    color: "rose",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section",
    target: "_blank"
  }, "Material Kit PRO"), _react.default.createElement(_Button.default, {
    color: "rose",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mkr-download-section",
    target: "_blank"
  }, "Material Dashboard PRO"))), _react.default.createElement("div", {
    className: classes.textCenter + " " + classes.sharingArea
  }, _react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, _react.default.createElement("h3", null, "Thank you for supporting us!")), _react.default.createElement(_Button.default, {
    color: "twitter"
  }, _react.default.createElement("i", {
    className: classes.socials + " fab fa-twitter"
  }), " Tweet"), _react.default.createElement(_Button.default, {
    color: "facebook"
  }, _react.default.createElement("i", {
    className: classes.socials + " fab fa-facebook-square"
  }), " Share"), _react.default.createElement(_Button.default, {
    color: "google"
  }, _react.default.createElement("i", {
    className: classes.socials + " fab fa-google-plus-g"
  }), "Share"), _react.default.createElement(_Button.default, {
    color: "github"
  }, _react.default.createElement("i", {
    className: classes.socials + " fab fa-github"
  }), " Star"))));
}