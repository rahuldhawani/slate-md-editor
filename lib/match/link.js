"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, currentTextNode, matched, change) {
  var matchedLength = matched[0].length;

  return change.deleteAtRange(_slate.Range.create({
    anchorKey: currentTextNode.key,
    focusKey: currentTextNode.key,
    anchorOffset: matched.index,
    focusOffset: matched.index + matchedLength
  })).call(_trailingSpace2.default, currentTextNode, matched.index).insertText(matched[1]).extend(0 - matched[1].length).wrapInline({
    type: type,
    data: { href: matched[2] }
  }).collapseToEnd().call(_trailingSpace2.default, currentTextNode, matched.index);
};

var _slate = require("slate");

var _trailingSpace = require("../utils/trailingSpace");

var _trailingSpace2 = _interopRequireDefault(_trailingSpace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }