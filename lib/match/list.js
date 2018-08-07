"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (listOption, currentTextNode, matched, change, ordered) {
  var matchedLength = matched[0].length;
  var newChange = change.deleteAtRange(_slate.Range.create({
    anchorKey: currentTextNode.key,
    focusKey: currentTextNode.key,
    anchorOffset: matched.index,
    focusOffset: matched.index + matchedLength
  }));

  return (0, _slateHelperBlockList2.default)(newChange, _extends({}, listOption, {
    ordered: ordered
  }));
};

var _slateHelperBlockList = require("@canner/slate-helper-block-list");

var _slateHelperBlockList2 = _interopRequireDefault(_slateHelperBlockList);

var _slate = require("slate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }