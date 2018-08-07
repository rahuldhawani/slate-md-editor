"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trailingSpace;
function trailingSpace(change, currentTextNode, offsetIndex) {
  change.insertTextByKey(currentTextNode.key, offsetIndex, " ");
}