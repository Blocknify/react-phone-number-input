'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _metadata = require('libphonenumber-js/metadata.min');

var _metadata2 = _interopRequireDefault(_metadata);

var _PhoneInputReactResponsiveUI = require('./PhoneInputReactResponsiveUI');

var _PhoneInputReactResponsiveUI2 = _interopRequireDefault(_PhoneInputReactResponsiveUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneInputReactResponsiveUIDefaultMetadata = function (_Component) {
	_inherits(PhoneInputReactResponsiveUIDefaultMetadata, _Component);

	function PhoneInputReactResponsiveUIDefaultMetadata() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, PhoneInputReactResponsiveUIDefaultMetadata);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhoneInputReactResponsiveUIDefaultMetadata.__proto__ || Object.getPrototypeOf(PhoneInputReactResponsiveUIDefaultMetadata)).call.apply(_ref, [this].concat(args))), _this), _this.storeInputRef = function (ref) {
			return _this.input = ref;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(PhoneInputReactResponsiveUIDefaultMetadata, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_PhoneInputReactResponsiveUI2.default, _extends({}, this.props, {
				ref: this.storeInputRef,
				metadata: _metadata2.default }));
		}

		// Proxy `.focus()` method.

	}, {
		key: 'focus',
		value: function focus() {
			return this.input.focus();
		}
	}]);

	return PhoneInputReactResponsiveUIDefaultMetadata;
}(_react.Component);

exports.default = PhoneInputReactResponsiveUIDefaultMetadata;
//# sourceMappingURL=PhoneInputReactResponsiveUIDefaultMetadata.js.map