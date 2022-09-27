"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var ModalContext = function ModalContext() {
  // 현재 open된 modal들을 나타냄.
  var ModalsStateContext = (0, _react.createContext)([]); // modal을 열고 닫는 함수

  var ModalsDispatchContext = (0, _react.createContext)({
    open: function open() {},
    close: function close() {}
  });
};

var _default = ModalContext;
exports["default"] = _default;