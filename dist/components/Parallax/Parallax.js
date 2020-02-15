"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Parallax;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _parallaxStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/parallaxStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_parallaxStyle.default);

function Parallax(props) {
  var _classNames;

  var windowScrollTop;

  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }

  var _React$useState = _react.default.useState("translate3d(0," + windowScrollTop + "px,0)"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      transform = _React$useState2[0],
      setTransform = _React$useState2[1];

  _react.default.useEffect(function () {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  var resetTransform = function resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  var filter = props.filter,
      className = props.className,
      children = props.children,
      style = props.style,
      image = props.image,
      small = props.small;
  var classes = useStyles();
  var parallaxClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.parallax, true), _defineProperty(_classNames, classes.filter, filter), _defineProperty(_classNames, classes.small, small), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react.default.createElement("div", {
    className: parallaxClasses,
    style: _objectSpread({}, style, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    })
  }, children);
}

Parallax.propTypes = {
  className: _propTypes.default.string,
  filter: _propTypes.default.bool,
  children: _propTypes.default.node,
  style: _propTypes.default.string,
  image: _propTypes.default.string,
  small: _propTypes.default.bool
};