"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SectionNavbars;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _Face = _interopRequireDefault(require("@material-ui/icons/Face"));

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _Explore = _interopRequireDefault(require("@material-ui/icons/Explore"));

var _GridContainer = _interopRequireDefault(require("../../../components/Grid/GridContainer.js"));

var _GridItem = _interopRequireDefault(require("../../../components/Grid/GridItem.js"));

var _Header = _interopRequireDefault(require("../../../components/Header/Header.js"));

var _CustomInput = _interopRequireDefault(require("../../../components/CustomInput/CustomInput.js"));

var _CustomDropdown = _interopRequireDefault(require("../../../components/CustomDropdown/CustomDropdown.js"));

var _Button = _interopRequireDefault(require("../../../components/CustomButtons/Button.js"));

var _bg = _interopRequireDefault(require("../../../assets/img/bg.jpg"));

var _avatar = _interopRequireDefault(require("../../../assets/img/faces/avatar.jpg"));

var _navbarsStyle = _interopRequireDefault(require("../../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
// @material-ui/icons
// core components
var useStyles = (0, _styles.makeStyles)(_navbarsStyle.default);

function SectionNavbars() {
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.section
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_GridContainer.default, null, _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("h3", null, "Menu")), _react.default.createElement(_Header.default, {
    brand: "Menu",
    color: "primary",
    leftLinks: _react.default.createElement(_List.default, {
      className: classes.list
    }, _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Link")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Link")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_CustomDropdown.default, {
      buttonText: "Dropdown",
      dropdownHeader: "Dropdown Header",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"]
    })))
  })), _react.default.createElement(_GridItem.default, {
    xs: 12,
    sm: 12,
    md: 6
  }, _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("h3", null, "Menu with Icons")), _react.default.createElement(_Header.default, {
    brand: "Icons",
    color: "info",
    rightLinks: _react.default.createElement(_List.default, {
      className: classes.list
    }, _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink
    }, _react.default.createElement(_Email.default, {
      className: classes.icons
    }))), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink
    }, _react.default.createElement(_Face.default, {
      className: classes.icons
    }))), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_CustomDropdown.default, {
      left: true,
      hoverColor: "info",
      dropdownHeader: "Dropdown Header",
      buttonIcon: "settings",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"]
    })))
  }))), _react.default.createElement("div", {
    className: classes.title
  }, _react.default.createElement("h3", null, "Navigation"))), _react.default.createElement("div", {
    id: "navbar",
    className: classes.navbar
  }, _react.default.createElement("div", {
    className: classes.navigation,
    style: {
      backgroundImage: "url(" + _bg.default + ")"
    }
  }, _react.default.createElement(_Header.default, {
    brand: "Brand",
    color: "rose",
    leftLinks: _react.default.createElement(_List.default, {
      className: classes.list
    }, _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Link")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Link"))),
    rightLinks: _react.default.createElement("div", null, _react.default.createElement(_CustomInput.default, {
      white: true,
      inputRootCustomClasses: classes.inputRootCustomClasses,
      formControlProps: {
        className: classes.formControl
      },
      inputProps: {
        placeholder: "Search",
        inputProps: {
          "aria-label": "Search",
          className: classes.searchInput
        }
      }
    }), _react.default.createElement(_Button.default, {
      justIcon: true,
      round: true,
      color: "white"
    }, _react.default.createElement(_Search.default, {
      className: classes.searchIcon
    })))
  }), _react.default.createElement(_Header.default, {
    brand: "Info Color",
    color: "info",
    rightLinks: _react.default.createElement(_List.default, {
      className: classes.list
    }, _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Discover")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Profile")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Settings")))
  }), _react.default.createElement(_Header.default, {
    brand: "Primary Color",
    color: "primary",
    rightLinks: _react.default.createElement(_List.default, {
      className: classes.list
    }, _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, _react.default.createElement(_Explore.default, {
      className: classes.icons
    }), " Discover")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, _react.default.createElement(_AccountCircle.default, {
      className: classes.icons
    }), " Profile")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, _react.default.createElement(_Icon.default, {
      className: classes.icons
    }, "settings"), " Settings")))
  }), _react.default.createElement(_Header.default, {
    brand: "Navbar with notifications",
    color: "dark",
    rightLinks: _react.default.createElement(_List.default, {
      className: classes.list
    }, _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Discover")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Wishlist")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      justIcon: true,
      round: true,
      href: "#pablo",
      className: classes.notificationNavLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "rose"
    }, _react.default.createElement(_Email.default, {
      className: classes.icons
    }))), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_CustomDropdown.default, {
      left: true,
      caret: false,
      hoverColor: "black",
      dropdownHeader: "Dropdown Header",
      buttonText: _react.default.createElement("img", {
        src: _avatar.default,
        className: classes.img,
        alt: "profile"
      }),
      buttonProps: {
        className: classes.navLink + " " + classes.imageDropdownButton,
        color: "transparent"
      },
      dropdownList: ["Me", "Settings and other stuff", "Sign out"]
    })))
  }), _react.default.createElement(_Header.default, {
    brand: "Navbar with profile",
    rightLinks: _react.default.createElement(_List.default, {
      className: classes.list
    }, _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Discover")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent"
    }, "Wishlist")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      href: "#pablo",
      className: classes.registerNavLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "rose",
      round: true
    }, "Register")))
  }), _react.default.createElement(_Header.default, {
    brand: "Transparent",
    color: "transparent",
    rightLinks: _react.default.createElement(_List.default, {
      className: classes.list
    }, _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton
    }, _react.default.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"
    }), " ", "Twitter")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton
    }, _react.default.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook"
    }), " ", "Facebook")), _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_Button.default, {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton
    }, _react.default.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram"
    }), " ", "Instagram")))
  }))));
}