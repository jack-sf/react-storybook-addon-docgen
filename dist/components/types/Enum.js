"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _proptypes = require("./proptypes");

var Enum = function Enum(_ref) {
  var propType = _ref.propType;
  return _react.default.createElement("span", null, (0, _proptypes.getPropTypes)(propType).map(function (_ref2) {
    var value = _ref2.value;
    return value;
  }).join(' | '));
};

Enum.propTypes = {
  propType: _proptypes.TypeInfo.isRequired
};