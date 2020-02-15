"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavPills;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSwipeableViews = _interopRequireDefault(require("react-swipeable-views"));

var _styles = require("@material-ui/core/styles");

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _GridContainer = _interopRequireDefault(require("../Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../Grid/GridItem.js"));

var _navPillsStyle = _interopRequireDefault(require("../../assets/jss/material-kit-react/components/navPillsStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(_navPillsStyle.default);

function NavPills(props) {
  var _classNames;

  var _React$useState = _react.default.useState(props.active),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var handleChange = function handleChange(event, active) {
    setActive(active);
  };

  var handleChangeIndex = function handleChangeIndex(index) {
    setActive(index);
  };

  var classes = useStyles();
  var tabs = props.tabs,
      direction = props.direction,
      color = props.color,
      horizontal = props.horizontal,
      alignCenter = props.alignCenter;
  var flexContainerClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, classes.flexContainer, true), _defineProperty(_classNames, classes.horizontalDisplay, horizontal !== undefined), _classNames));

  var tabButtons = _react.default.createElement(_Tabs.default, {
    classes: {
      root: classes.root,
      fixed: classes.fixed,
      flexContainer: flexContainerClasses,
      indicator: classes.displayNone
    },
    value: active,
    onChange: handleChange,
    centered: alignCenter
  }, tabs.map(function (prop, key) {
    var _classNames2;

    var icon = {};

    if (prop.tabIcon !== undefined) {
      icon["icon"] = _react.default.createElement(prop.tabIcon, {
        className: classes.tabIcon
      });
    }

    var pillsClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.pills, true), _defineProperty(_classNames2, classes.horizontalPills, horizontal !== undefined), _defineProperty(_classNames2, classes.pillsWithIcons, prop.tabIcon !== undefined), _classNames2));
    return _react.default.createElement(_Tab.default, _extends({
      label: prop.tabButton,
      key: key
    }, icon, {
      classes: {
        root: pillsClasses,
        selected: classes[color],
        wrapper: classes.tabWrapper
      }
    }));
  }));

  var tabContent = _react.default.createElement("div", {
    className: classes.contentWrapper
  }, _react.default.createElement(_reactSwipeableViews.default, {
    axis: direction === "rtl" ? "x-reverse" : "x",
    index: active,
    onChangeIndex: handleChangeIndex
  }, tabs.map(function (prop, key) {
    return _react.default.createElement("div", {
      className: classes.tabContent,
      key: key
    }, prop.tabContent);
  })));

  return horizontal !== undefined ? _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, horizontal.tabsGrid, tabButtons), _react.default.createElement(_GridItem.default, horizontal.contentGrid, tabContent)) : _react.default.createElement("div", null, tabButtons, tabContent);
}

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};
NavPills.propTypes = {
  // index of the default active pill
  active: _propTypes.default.number,
  tabs: _propTypes.default.arrayOf(_propTypes.default.shape({
    tabButton: _propTypes.default.string,
    tabIcon: _propTypes.default.object,
    tabContent: _propTypes.default.node
  })).isRequired,
  color: _propTypes.default.oneOf(["primary", "warning", "danger", "success", "info", "rose"]),
  direction: _propTypes.default.string,
  horizontal: _propTypes.default.shape({
    tabsGrid: _propTypes.default.object,
    contentGrid: _propTypes.default.object
  }),
  alignCenter: _propTypes.default.bool
};