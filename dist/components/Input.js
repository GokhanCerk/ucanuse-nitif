"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Input = props => {
  const {
    label,
    input
  } = props;

  function onKeyPressHandle(e) {
    const regex = /[0-9]/g;
    const value = String.fromCharCode(e.charCode);

    if (!value.match(regex)) {
      e.preventDefault();
    }
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: input.id
  }, label), /*#__PURE__*/_react.default.createElement("input", _extends({}, input, {
    onKeyPress: onKeyPressHandle
  })));
};

var _default = Input;
exports.default = _default;