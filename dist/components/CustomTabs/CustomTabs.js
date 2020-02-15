"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomTabs;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Card = _interopRequireDefault(require("../Card/Card.js"));

var _CardBody = _interopRequireDefault(require("../Card/CardBody.js"));

var _CardHeader = _interopRequireDefault(require("../Card/CardHeader.js"));

var _customTabsStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/customTabsStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_customTabsStyle.default);

function CustomTabs(props) {
  var _classNames;

  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, value) {
    setValue(value);
  };

  var classes = useStyles();
  var headerColor = props.headerColor,
      plainTabs = props.plainTabs,
      tabs = props.tabs,
      title = props.title,
      rtlActive = props.rtlActive;
  var cardTitle = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.cardTitle, true), _defineProperty(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
  return _react.default.createElement(_Card.default, {
    plain: plainTabs
  }, _react.default.createElement(_CardHeader.default, {
    color: headerColor,
    plain: plainTabs
  }, title !== undefined ? _react.default.createElement("div", {
    className: cardTitle
  }, title) : null, _react.default.createElement(_Tabs.default, {
    value: value,
    onChange: handleChange,
    classes: {
      root: classes.tabsRoot,
      indicator: classes.displayNone
    }
  }, tabs.map(function (prop, key) {
    var icon = {};

    if (prop.tabIcon) {
      icon = {
        icon: typeof prop.tabIcon === "string" ? _react.default.createElement(_Icon.default, null, prop.tabIcon) : _react.default.createElement(prop.tabIcon, null)
      };
    }

    return _react.default.createElement(_Tab.default, _extends({
      classes: {
        root: classes.tabRootButton,
        label: classes.tabLabel,
        selected: classes.tabSelected,
        wrapper: classes.tabWrapper
      },
      key: key,
      label: prop.tabName
    }, icon));
  }))), _react.default.createElement(_CardBody.default, null, tabs.map(function (prop, key) {
    if (key === value) {
      return _react.default.createElement("div", {
        key: key
      }, prop.tabContent);
    }

    return null;
  })));
}

CustomTabs.propTypes = {
  headerColor: _propTypes.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: _propTypes.default.string,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape({
    tabName: _propTypes.default.string.isRequired,
    tabIcon: _propTypes.default.object,
    tabContent: _propTypes.default.node.isRequired
  })),
  rtlActive: _propTypes.default.bool,
  plainTabs: _propTypes.default.bool
};