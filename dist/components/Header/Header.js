"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _headerStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/headerStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_headerStyle.default);

function Header(props) {
  var _classNames;

  var classes = useStyles();

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  _react.default.useEffect(function () {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var headerColorChange = function headerColorChange() {
    var color = props.color,
        changeColorOnScroll = props.changeColorOnScroll;
    var windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  var color = props.color,
      rightLinks = props.rightLinks,
      leftLinks = props.leftLinks,
      brand = props.brand,
      fixed = props.fixed,
      absolute = props.absolute;
  var appBarClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.appBar, true), _defineProperty(_classNames, classes[color], color), _defineProperty(_classNames, classes.absolute, absolute), _defineProperty(_classNames, classes.fixed, fixed), _classNames));

  var brandComponent = _react.default.createElement(_Button.default, {
    className: classes.title
  }, brand);

  return _react.default.createElement(_AppBar.default, {
    className: appBarClasses
  }, _react.default.createElement(_Toolbar.default, {
    className: classes.container
  }, leftLinks !== undefined ? brandComponent : null, _react.default.createElement("div", {
    className: classes.flex
  }, leftLinks !== undefined ? _react.default.createElement(_Hidden.default, {
    smDown: true,
    implementation: "css"
  }, leftLinks) : brandComponent), _react.default.createElement(_Hidden.default, {
    smDown: true,
    implementation: "css"
  }, rightLinks), _react.default.createElement(_Hidden.default, {
    mdUp: true
  }, _react.default.createElement(_IconButton.default, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle
  }, _react.default.createElement(_Menu.default, null)))), _react.default.createElement(_Hidden.default, {
    mdUp: true,
    implementation: "js"
  }, _react.default.createElement(_Drawer.default, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle
  }, _react.default.createElement("div", {
    className: classes.appResponsive
  }, leftLinks, rightLinks))));
}

Header.defaultProp = {
  color: "white"
};
Header.propTypes = {
  color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  rightLinks: _propTypes.default.node,
  leftLinks: _propTypes.default.node,
  brand: _propTypes.default.string,
  fixed: _propTypes.default.bool,
  absolute: _propTypes.default.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: _propTypes.default.shape({
    height: _propTypes.default.number.isRequired,
    color: _propTypes.default.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};