"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalsDispatchContext = exports.ModalsStateContext = void 0;

var _react = require("react");

var _useModal = _interopRequireDefault(require("../hooks/useModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 현재 open된 modal들을 나타냄.
var ModalsStateContext = (0, _react.createContext)([]); // modal을 열고 닫는 함수

exports.ModalsStateContext = ModalsStateContext;
var ModalsDispatchContext = (0, _react.createContext)({
  open: function open() {},
  close: function close() {}
});
exports.ModalsDispatchContext = ModalsDispatchContext;