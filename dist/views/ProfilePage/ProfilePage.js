"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProfilePage;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("@material-ui/core/styles");

var _Camera = _interopRequireDefault(require("@material-ui/icons/Camera"));

var _Palette = _interopRequireDefault(require("@material-ui/icons/Palette"));

var _Favorite = _interopRequireDefault(require("@material-ui/icons/Favorite"));

var _Header = _interopRequireDefault(require("../../components/Header/Header.js"));

var _Footer = _interopRequireDefault(require("../../components/Footer/Footer.js"));

var _Button = _interopRequireDefault(require("../../components/CustomButtons/Button.js"));

var _GridContainer = _interopRequireDefault(require("../../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../../components/Grid/GridItem.js"));

var _HeaderLinks = _interopRequireDefault(require("../../components/Header/HeaderLinks.js"));

var _NavPills = _interopRequireDefault(require("../../components/NavPills/NavPills.js"));

var _Parallax = _interopRequireDefault(require("../../components/Parallax/Parallax.js"));

var _christian = _interopRequireDefault(require("../../assets/img/faces/christian.jpg"));

var _studio = _interopRequireDefault(require("../../assets/img/examples/studio-1.jpg"));

var _studio2 = _interopRequireDefault(require("../../assets/img/examples/studio-2.jpg"));

var _studio3 = _interopRequireDefault(require("../../assets/img/examples/studio-3.jpg"));

var _studio4 = _interopRequireDefault(require("../../assets/img/examples/studio-4.jpg"));

var _studio5 = _interopRequireDefault(require("../../assets/img/examples/studio-5.jpg"));

var _oluEletu = _interopRequireDefault(require("../../assets/img/examples/olu-eletu.jpg"));

var _clemOnojeghuo = _interopRequireDefault(require("../../assets/img/examples/clem-onojeghuo.jpg"));

var _cynthiaDelRio = _interopRequireDefault(require("../../assets/img/examples/cynthia-del-rio.jpg"));

var _mariyaGeorgieva = _interopRequireDefault(require("../../assets/img/examples/mariya-georgieva.jpg"));

var _clemOnojegaw = _interopRequireDefault(require("../../assets/img/examples/clem-onojegaw.jpg"));

var _profilePage = _interopRequireDefault(require("../../assets/jss/material-kit-react/views/profilePage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(_profilePage.default);

function ProfilePage(props) {
  var classes = useStyles();

  var rest = _extends({}, props);

  var imageClasses = (0, _classnames.default)(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  var navImageClasses = (0, _classnames.default)(classes.imgRounded, classes.imgGallery);
  return _react.default.createElement("div", null, _react.default.createElement(_Header.default, _extends({
    color: "transparent",
    brand: "Material Kit React",
    rightLinks: _react.default.createElement(_HeaderLinks.default, null),
    fixed: true,
    changeColorOnScroll: {
      height: 200,
      color: "white"
    }
  }, rest)), _react.default.createElement(_Parallax.default, {
    small: true,
    filter: true,
    image: require("../../assets/img/profile-bg.jpg")
  }), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.main, classes.mainRaised)
  }, _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, _react.default.createElement("div", {
    className: classes.profile
  }, _react.default.createElement("div", null, _react.default.createElement("img", {
    src: _christian.default,
    alt: "...",
    className: imageClasses
  })), _react.default.createElement("div", {
    className: classes.name
  }, _react.default.createElement("h3", {
    className: classes.title
  }, "Christian Louboutin"), _react.default.createElement("h6", null, "DESIGNER"), _react.default.createElement(_Button.default, {
    justIcon: true,
    link: true,
    className: classes.margin5
  }, _react.default.createElement("i", {
    className: "fab fa-twitter"
  })), _react.default.createElement(_Button.default, {
    justIcon: true,
    link: true,
    className: classes.margin5
  }, _react.default.createElement("i", {
    className: "fab fa-instagram"
  })), _react.default.createElement(_Button.default, {
    justIcon: true,
    link: true,
    className: classes.margin5
  }, _react.default.createElement("i", {
    className: "fab fa-facebook"
  })))))), _react.default.createElement("div", {
    className: classes.description
  }, _react.default.createElement("p", null, "An artist of considerable range, Chet Faker \u2014 the name taken by Melbourne-raised, Brooklyn-based Nick Murphy \u2014 writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.", " ")), _react.default.createElement(_GridContainer.default, {
    justify: "center"
  }, _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 8,
    className: classes.navWrapper
  }, _react.default.createElement(_NavPills.default, {
    alignCenter: true,
    color: "primary",
    tabs: [{
      tabButton: "Studio",
      tabIcon: _Camera.default,
      tabContent: _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement("img", {
        alt: "...",
        src: _studio.default,
        className: navImageClasses
      }), _react.default.createElement("img", {
        alt: "...",
        src: _studio2.default,
        className: navImageClasses
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement("img", {
        alt: "...",
        src: _studio5.default,
        className: navImageClasses
      }), _react.default.createElement("img", {
        alt: "...",
        src: _studio4.default,
        className: navImageClasses
      })))
    }, {
      tabButton: "Work",
      tabIcon: _Palette.default,
      tabContent: _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement("img", {
        alt: "...",
        src: _oluEletu.default,
        className: navImageClasses
      }), _react.default.createElement("img", {
        alt: "...",
        src: _clemOnojeghuo.default,
        className: navImageClasses
      }), _react.default.createElement("img", {
        alt: "...",
        src: _cynthiaDelRio.default,
        className: navImageClasses
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement("img", {
        alt: "...",
        src: _mariyaGeorgieva.default,
        className: navImageClasses
      }), _react.default.createElement("img", {
        alt: "...",
        src: _clemOnojegaw.default,
        className: navImageClasses
      })))
    }, {
      tabButton: "Favorite",
      tabIcon: _Favorite.default,
      tabContent: _react.default.createElement(_GridContainer.default, {
        justify: "center"
      }, _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement("img", {
        alt: "...",
        src: _mariyaGeorgieva.default,
        className: navImageClasses
      }), _react.default.createElement("img", {
        alt: "...",
        src: _studio3.default,
        className: navImageClasses
      })), _react.default.createElement(_GridItem.default, {
        xs: 12,
        sm: 12,
        md: 4
      }, _react.default.createElement("img", {
        alt: "...",
        src: _clemOnojeghuo.default,
        className: navImageClasses
      }), _react.default.createElement("img", {
        alt: "...",
        src: _oluEletu.default,
        className: navImageClasses
      }), _react.default.createElement("img", {
        alt: "...",
        src: _studio.default,
        className: navImageClasses
      })))
    }]
  })))))), _react.default.createElement(_Footer.default, null));
}