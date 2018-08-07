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
  })).insertInline({
    type: type,
    isVoid: true,
    data: {
      src: matched[2]
    }
  }).collapseToStartOfNextText();
};

var _slate = require("slate");