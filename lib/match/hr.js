"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, currentTextNode, matched, change) {
  return change.removeNodeByKey(currentTextNode.key).insertBlock({
    type: type,
    isVoid: true
  }).collapseToStartOfNextBlock();
};