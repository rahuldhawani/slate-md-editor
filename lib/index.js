"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownPlugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// blocks


// marks plugin


var _react = require("react");

var React = _interopRequireWildcard(_react);

var _slateReact = require("slate-react");

var _slatePrism = require("slate-prism");

var _slatePrism2 = _interopRequireDefault(_slatePrism);

var _slateEditBlockquote = require("slate-edit-blockquote");

var _slateEditBlockquote2 = _interopRequireDefault(_slateEditBlockquote);

var _slateEditList = require("slate-edit-list");

var _slateEditList2 = _interopRequireDefault(_slateEditList);

var _slateEditCode = require("slate-edit-code");

var _slateEditCode2 = _interopRequireDefault(_slateEditCode);

var _slateHelperBlockList = require("@canner/slate-helper-block-list");

var _blocks = require("markup-it/lib/constants/blocks");

var _blocks2 = _interopRequireDefault(_blocks);

var _marks = require("markup-it/lib/constants/marks");

var _marks2 = _interopRequireDefault(_marks);

var _inlines = require("markup-it/lib/constants/inlines");

var _inlines2 = _interopRequireDefault(_inlines);

var _slateIconBlockquote = require("@canner/slate-icon-blockquote");

var _slateIconList = require("@canner/slate-icon-list");

var _slateIconCodeblock = require("@canner/slate-icon-codeblock");

var _slateIconHr = require("@canner/slate-icon-hr");

var _slateIconLink = require("@canner/slate-icon-link");

var _slateIconImage = require("@canner/slate-icon-image");

var _slateIconHeader = require("@canner/slate-icon-header");

var _slateIconShared = require("@canner/slate-icon-shared");

var _slateIconBold = require("@canner/slate-icon-bold");

var _slateIconCode = require("@canner/slate-icon-code");

var _slateIconStrikethrough = require("@canner/slate-icon-strikethrough");

var _slateIconUnderline = require("@canner/slate-icon-underline");

var _slateIconItalic = require("@canner/slate-icon-italic");

var _markdownPlugin = require("./markdownPlugin");

var _markdownPlugin2 = _interopRequireDefault(_markdownPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkdownPlugin = exports.MarkdownPlugin = _markdownPlugin2.default;

exports.default = function () {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var options = _extends({
    markdownOption: {
      blocks: _extends(_blocks2.default, opt.blocks),
      marks: _extends(_marks2.default, opt.marks),
      inlines: _extends(_inlines2.default, opt.inlines)
    },
    prismOption: {
      onlyIn: function onlyIn(node) {
        return node.type === _blocks2.default.CODE;
      },
      getSyntax: function getSyntax(node) {
        return node.data.get("syntax");
      }
    },
    codeOption: {
      onlyIn: function onlyIn(node) {
        return node.type === _blocks2.default.CODE;
      }
    },
    blockquoteOption: {},
    listOption: _slateHelperBlockList.DEFAULT
  }, opt);

  var mdEditorPlugins = [MarkdownPlugin(options.markdownOption), (0, _slatePrism2.default)(options.prismOption), (0, _slateEditCode2.default)(options.codeOption), (0, _slateEditBlockquote2.default)(options.blockquoteOption), (0, _slateEditList2.default)(options.listOption), (0, _slateIconBlockquote.BlockquotePlugin)(options.blockquoteOption), (0, _slateIconList.ListPlugin)(options.listOption), (0, _slateIconCodeblock.CodeBlockPlugin)(options.codeOption), (0, _slateIconHr.HrPlugin)(), (0, _slateIconLink.LinkPlugin)(), (0, _slateIconImage.ImagePlugin)(), (0, _slateIconHeader.HeaderOnePlugin)(), (0, _slateIconHeader.HeaderTwoPlugin)(), (0, _slateIconHeader.HeaderThreePlugin)(), (0, _slateIconHeader.HeaderFourPlugin)(), (0, _slateIconHeader.HeaderFivePlugin)(), (0, _slateIconHeader.HeaderSixPlugin)(), (0, _slateIconShared.ParagraphPlugin)(), (0, _slateIconBold.BoldPlugin)(), (0, _slateIconCode.CodePlugin)(), (0, _slateIconStrikethrough.StrikeThroughPlugin)(), (0, _slateIconUnderline.UnderlinePlugin)(), (0, _slateIconItalic.ItalicPlugin)()];

  return function (_React$Component) {
    _inherits(MdEditor, _React$Component);

    function MdEditor(props) {
      _classCallCheck(this, MdEditor);

      var _this = _possibleConstructorReturn(this, (MdEditor.__proto__ || Object.getPrototypeOf(MdEditor)).call(this, props));

      _this.plugins = [].concat(mdEditorPlugins, _toConsumableArray(_this.props.plugins || []));
      return _this;
    }

    _createClass(MdEditor, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            value = _props.value,
            onChange = _props.onChange,
            plugins = _props.plugins,
            rest = _objectWithoutProperties(_props, ["value", "onChange", "plugins"]); // eslint-disable-line


        return React.createElement(
          "div",
          { className: "markdown-body" },
          React.createElement(_slateReact.Editor, _extends({
            value: value,
            plugins: this.plugins,
            onChange: onChange
          }, rest))
        );
      }
    }]);

    return MdEditor;
  }(React.Component);
};