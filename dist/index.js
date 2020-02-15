"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _history = require("history");

var _reactRouterDom = require("react-router-dom");

require("assets/scss/material-kit-react.scss?v=1.8.0");

var _Components = _interopRequireDefault(require("./views/Components/Components.js"));

var _LandingPage = _interopRequireDefault(require("./views/LandingPage/LandingPage.js"));

var _ProfilePage = _interopRequireDefault(require("./views/ProfilePage/ProfilePage.js"));

var _LoginPage = _interopRequireDefault(require("./views/LoginPage/LoginPage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pages for this product
var hist = (0, _history.createBrowserHistory)();

_reactDom.default.render(_react.default.createElement(_reactRouterDom.Router, {
  history: hist
}, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
  path: "/landing-page",
  component: _LandingPage.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/profile-page",
  component: _ProfilePage.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/login-page",
  component: _LoginPage.default
}), _react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  component: _Components.default
}))), document.getElementById("root"));