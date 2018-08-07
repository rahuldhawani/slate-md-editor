"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blocks = require("markup-it/lib/constants/blocks");

var _blocks2 = _interopRequireDefault(_blocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  types: [_blocks2.default.OL_LIST, _blocks2.default.UL_LIST],
  typeItem: _blocks2.default.LIST_ITEM,
  typeDefault: _blocks2.default.PARAGRAPH
};