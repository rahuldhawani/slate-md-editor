"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, currentTextNode, matched, change) {
  var matchedLength = matched[0].length;
  return change.setBlocks(type).deleteAtRange(_slate.Range.create({
    anchorKey: currentTextNode.key,
    focusKey: currentTextNode.key,
    anchorOffset: matched.index,
    focusOffset: matched.index + matchedLength
  }));
};

var _slate = require("slate");