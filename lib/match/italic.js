"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type, currentTextNode, matched, change) {
  var matchedLength = matched[0].length;
  var reg = matched[1] === "*" ? /\*/ : matched[1];
  var addText = matched[0].replace(new RegExp(reg, "g"), "");

  return change.deleteAtRange(_slate.Range.create({
    anchorKey: currentTextNode.key,
    focusKey: currentTextNode.key,
    anchorOffset: matched.index,
    focusOffset: matched.index + matchedLength
  })).insertTextByKey(currentTextNode.key, matched.index, addText, [_slate.Mark.create({ type: type })]).call(_trailingSpace2.default, currentTextNode, matched.index).call(_slateHelperMarkRemoveall2.default);
};

var _slate = require("slate");

var _trailingSpace = require("../utils/trailingSpace");

var _trailingSpace2 = _interopRequireDefault(_trailingSpace);

var _slateHelperMarkRemoveall = require("@canner/slate-helper-mark-removeall");

var _slateHelperMarkRemoveall2 = _interopRequireDefault(_slateHelperMarkRemoveall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }