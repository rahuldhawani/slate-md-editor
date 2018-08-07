"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// constant


// handler


// match


// plugins


var _keys = require("./constant/keys");

var _list = require("./constant/list");

var _list2 = _interopRequireDefault(_list);

var _blocks = require("markup-it/lib/constants/blocks");

var _blocks2 = _interopRequireDefault(_blocks);

var _marks = require("markup-it/lib/constants/marks");

var _marks2 = _interopRequireDefault(_marks);

var _inlines = require("markup-it/lib/constants/inlines");

var _inlines2 = _interopRequireDefault(_inlines);

var _onEnter = require("./handler/onEnter");

var _onEnter2 = _interopRequireDefault(_onEnter);

var _blockquote = require("./match/blockquote");

var _blockquote2 = _interopRequireDefault(_blockquote);

var _codeBlock = require("./match/codeBlock");

var _codeBlock2 = _interopRequireDefault(_codeBlock);

var _code = require("./match/code");

var _code2 = _interopRequireDefault(_code);

var _header = require("./match/header");

var _header2 = _interopRequireDefault(_header);

var _bold = require("./match/bold");

var _bold2 = _interopRequireDefault(_bold);

var _italic = require("./match/italic");

var _italic2 = _interopRequireDefault(_italic);

var _strikethrough = require("./match/strikethrough");

var _strikethrough2 = _interopRequireDefault(_strikethrough);

var _boldItalic = require("./match/boldItalic");

var _boldItalic2 = _interopRequireDefault(_boldItalic);

var _hr = require("./match/hr");

var _hr2 = _interopRequireDefault(_hr);

var _image = require("./match/image");

var _image2 = _interopRequireDefault(_image);

var _link = require("./match/link");

var _link2 = _interopRequireDefault(_link);

var _list3 = require("./match/list");

var _list4 = _interopRequireDefault(_list3);

var _slateEditCode = require("slate-edit-code");

var _slateEditCode2 = _interopRequireDefault(_slateEditCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codePlugin = (0, _slateEditCode2.default)({
  onlyIn: function onlyIn(node) {
    return node.type === "code_block";
  }
});

var checkPatterns = function checkPatterns(options, change) {
  var value = change.value;
  var texts = value.texts;

  var currentTextNode = texts.get(0);
  var currentLineText = currentTextNode.text;
  var matched = void 0;

  // if is in code block ignore matched patterns
  if (codePlugin.utils.isInCodeBlock(value)) {
    return;
  }

  // reference: https://github.com/PrismJS/prism/blob/gh-pages/components/prism-markdown.js
  // blocks
  if (matched = currentLineText.match(/^>\s/m)) {
    // [blockquote] punctuation, blockquote
    return (0, _blockquote2.default)(options.blocks.BLOCKQUOTE, currentTextNode, matched, change);
  } else if (matched = currentLineText.match(/^(?: {4}|\t)/m)) {
    // [Code Block] Prefixed by 4 spaces or 1 tab
    return (0, _codeBlock2.default)(options.codeOption, currentTextNode, matched, change);
  } else if (matched = currentLineText.match(/^\s*```(\w+)?\s/m)) {
    // [Code block]
    // ```lang
    return (0, _codeBlock2.default)(options.codeOption, currentTextNode, matched, change, matched[1]);
  } else if (matched = currentLineText.match(/(^\s*)#{1,6}\s/m)) {
    // [Header] h1 ~ h6
    // # h1
    // ## h2
    // ###### h6
    return (0, _header2.default)(options.blocks, currentTextNode, matched, change);
  } else if (matched = currentLineText.match(/(^\s*)([*-])(?:[\t ]*\2){2,}/m)) {
    // [HR]
    // ***
    // ---
    // * * *
    // -----------
    return (0, _hr2.default)(options.blocks.HR, currentTextNode, matched, change);
  } else if (matched = currentLineText.match(/((?:^\s*)(?:[*+-]\s))/m)) {
    // * item
    // + item
    // - item
    return (0, _list4.default)(options.listOption, currentTextNode, matched, change, false);
  } else if (matched = currentLineText.match(/((?:^\s*)(?:\d+\.\s))/m)) {
    // 1. item
    return (0, _list4.default)(options.listOption, currentTextNode, matched, change, true);
  }

  var offsetBeforeSpace = value.selection.anchorOffset - 2;
  var lastChar = currentLineText.charAt(offsetBeforeSpace);
  var prevTextFromSpace = currentLineText.substr(0, offsetBeforeSpace + 1);

  // inline patterns
  if (matched = lastChar === "`" && prevTextFromSpace.match(/\s?(`|``)((?!\1).)+?\1$/m)) {
    // [Code] `code`
    return (0, _code2.default)(options.marks.CODE, currentTextNode, matched, change);
  } else if (matched = currentLineText.match(/!\[([^\]]+)\]\(([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?)\)/)) {
    // ![example](http://example.com "Optional title")
    return (0, _image2.default)(options.inlines.IMAGE, currentTextNode, matched, change);
  } else if (matched = currentLineText.match(/\[([^\]]+)\]\(([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?)\)/)) {
    // [example](http://example.com "Optional title")
    return (0, _link2.default)(options.inlines.LINK, currentTextNode, matched, change);
  }

  if (lastChar === "*" || lastChar === "_") {
    if (matched = prevTextFromSpace.match(/\s?(\*\*\*|___)((?!\1).)+?\1$/m)) {
      // [Bold + Italic] ***[strong + italic]***, ___[strong + italic]___
      return (0, _boldItalic2.default)(options.marks, currentTextNode, matched, change);
    } else if (matched = prevTextFromSpace.match(/\s?(\*\*|__)((?!\1).)+?\1$/m)) {
      // [Bold] **strong**, __strong__
      return (0, _bold2.default)(options.marks.BOLD, currentTextNode, matched, change);
    } else if (matched = prevTextFromSpace.match(/\s?(\*|_)((?!\1).)+?\1$/m)) {
      // [Italic] _em_, *em*
      return (0, _italic2.default)(options.marks.ITALIC, currentTextNode, matched, change);
    }
  }

  if (lastChar === "~") {
    if (matched = prevTextFromSpace.match(/\s?(~)((?!\1).)+?\1$/m)) {
      // [Strike Through] ~strikethrough~
      return (0, _strikethrough2.default)(options.marks.STRIKETHROUGH, currentTextNode, matched, change);
    }
  }
};

exports.default = function () {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var options = {
    blocks: _extends(_blocks2.default, opt.blocks),
    marks: _extends(_marks2.default, opt.marks),
    inlines: _extends(_inlines2.default, opt.inlines),
    codeOption: _extends({
      onlyIn: function onlyIn(node) {
        return node.type === _blocks2.default.CODE;
      }
    }, opt.codeOption),
    blockquoteOption: _extends({}, opt.blockquoteOption),
    listOption: _extends(_list2.default, opt.listOption)
  };

  return {
    onKeyDown: function onKeyDown(e, change) {
      switch (e.key) {
        case _keys.KEY_ENTER:
          return (0, _onEnter2.default)(options, change);
      }
    },
    onKeyUp: function onKeyUp(e, change) {
      switch (e.key) {
        case _keys.KEY_SPACE:
          return checkPatterns(options, change);
      }
    }
  };
};