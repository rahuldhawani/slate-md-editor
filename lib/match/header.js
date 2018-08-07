"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slate = require("slate");

exports.default = function (options, currentTextNode, matched, change) {
  var matchedLength = matched[0].length;
  var count = (matched[0].match(/#/g) || []).length;
  var header = void 0;

  if (count === 1) header = options.HEADING_1;else if (count === 2) header = options.HEADING_2;else if (count === 3) header = options.HEADING_3;else if (count === 4) header = options.HEADING_4;else if (count === 5) header = options.HEADING_5;else if (count === 6) header = options.HEADING_6;else return;

  return change.setBlocks(header).deleteAtRange(_slate.Range.create({
    anchorKey: currentTextNode.key,
    focusKey: currentTextNode.key,
    anchorOffset: matched.index,
    focusOffset: matched.index + matchedLength
  }));
};