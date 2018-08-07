"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onEnter;

var _slateEditList = require("slate-edit-list");

var _slateEditList2 = _interopRequireDefault(_slateEditList);

var _slateEditBlockquote = require("slate-edit-blockquote");

var _slateEditBlockquote2 = _interopRequireDefault(_slateEditBlockquote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onEnter(options, change) {
  var value = change.value;
  var blocks = value.blocks,
      texts = value.texts,
      selection = value.selection;

  var getCurrentblock = blocks.get(0);
  var currentTextNode = texts.get(0);
  var currentLineText = currentTextNode.text;
  var isSelectionInList = (0, _slateEditList2.default)(options.listOption).utils.isSelectionInList;
  var isSelectionInBlockquote = (0, _slateEditBlockquote2.default)(options.blockquoteOption).utils.isSelectionInBlockquote;


  if (getCurrentblock.type === options.blocks.CODE_LINE || getCurrentblock.type === options.blocks.CODE || getCurrentblock.type === options.blocks.CODE || isSelectionInList(value) || isSelectionInBlockquote(value) || currentLineText.length > selection.focusOffset) return;

  return change.insertBlock(options.blocks.PARAGRAPH);
}