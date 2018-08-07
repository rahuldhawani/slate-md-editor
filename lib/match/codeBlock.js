"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (codeOption, currentTextNode, matched, change, lang) {
  var matchedLength = matched[0].length;
  var codePlugin = (0, _slateEditCode2.default)(codeOption);
  var newChange = change;

  if (lang) {
    newChange = change.setBlocks({ data: _slate.Data.create({ syntax: lang }) });
  }

  return codePlugin.changes.wrapCodeBlock(newChange.deleteAtRange(_slate.Range.create({
    anchorKey: currentTextNode.key,
    focusKey: currentTextNode.key,
    anchorOffset: matched.index,
    focusOffset: matched.index + matchedLength
  })));
};

var _slate = require("slate");

var _slateEditCode = require("slate-edit-code");

var _slateEditCode2 = _interopRequireDefault(_slateEditCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }