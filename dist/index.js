"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./styles.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function AnimatedText(props) {
  var children = props.children;
  var text = children.props.children;
  var Tag = children.type;
  var words = text.split(" ");
  var tagRef = (0, _react.useRef)();
  var delayBetweenLetter = props.between ? props.between : 15;
  var delayStart = props.delay ? props.delay : 200;
  var offset = props.offset ? props.offset : "100px";
  var threshold = props.threshold ? props.threshold : 0.2;
  var handleIntersect = function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated-loaded");
      }
    });
  };
  (0, _react.useEffect)(function () {
    var options = {
      root: null,
      rootMargin: offset,
      threshold: threshold
    };
    if (!window.letterObserver) {
      window.letterObserver = new IntersectionObserver(handleIntersect, options);
    }
    window.letterObserver.observe(tagRef.current);
  });
  return /*#__PURE__*/_react["default"].createElement(Tag, {
    ref: tagRef
  }, words.map(function (word, index) {
    var letters = word.split("");
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "word",
      key: "animated-word-".concat(index)
    }, letters.map(function (letter, lindex) {
      var previousLetters = 0;
      words.forEach(function (localWord, windex) {
        if (windex < index) {
          previousLetters += localWord.length;
        }
      });
      var delay = "".concat(lindex * delayBetweenLetter + previousLetters * delayBetweenLetter + delayStart, "ms");
      return /*#__PURE__*/_react["default"].createElement("span", {
        key: "animated-word-".concat(index, "-").concat(lindex),
        style: {
          transitionDelay: delay
        },
        className: "letter"
      }, letter);
    }), " ");
  }));
}
var _default = AnimatedText;
exports["default"] = _default;