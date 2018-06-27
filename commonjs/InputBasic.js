'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

// Both these functions are exported from `react-phone-number-input`.


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _parsePhoneNumberCharacters = require('./parsePhoneNumberCharacters');

var _parsePhoneNumberCharacters2 = _interopRequireDefault(_parsePhoneNumberCharacters);

var _formatPhoneNumber = require('./formatPhoneNumber');

var _formatPhoneNumber2 = _interopRequireDefault(_formatPhoneNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * `InputBasic`'s caret is not as "smart" as the default `inputComponent`'s
 * but still works good enough. When erasing or inserting digits in the middle
 * of a phone number the caret usually jumps to the end: this is the expected
 * behaviour and it's the workaround for the [Samsung Galaxy smart caret positioning bug](https://github.com/catamphetamine/react-phone-number-input/issues/75).
 */
var InputBasic = (0, _reactLifecyclesCompat.polyfill)(_class = function (_PureComponent) {
	_inherits(InputBasic, _PureComponent);

	function InputBasic() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, InputBasic);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputBasic.__proto__ || Object.getPrototypeOf(InputBasic)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.onChange = function (event) {
			var onChange = _this.props.onChange;
			var value = _this.state.value;


			var newValue = (0, _parsePhoneNumberCharacters2.default)(event.target.value);

			// By default, if a value is something like `"(123)"`
			// then Backspace would only erase the rightmost brace
			// becoming something like `"(123"`
			// which would give the same `"123"` value
			// which would then be formatted back to `"(123)"`
			// and so a user wouldn't be able to erase the phone number.
			// Working around this issue with this simple hack.
			if (newValue === value) {
				if (_this.format(newValue).indexOf(event.target.value) === 0) {
					// Trim the last digit (or plus sign).
					newValue = newValue.slice(0, -1);
				}
			}

			// Prevents React from resetting the `<input/>` caret position.
			// https://github.com/reactjs/react-redux/issues/525#issuecomment-254852039
			// https://github.com/facebook/react/issues/955
			_this.setState({ value: newValue }, function () {
				return onChange(newValue);
			});
		}, _this.storeInput = function (ref) {
			return _this.input = ref;
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(InputBasic, [{
		key: 'format',
		value: function format(value) {
			var _props = this.props,
			    country = _props.country,
			    metadata = _props.metadata;


			return (0, _formatPhoneNumber2.default)(value, country, metadata).text;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    onChange = _props2.onChange,
			    country = _props2.country,
			    metadata = _props2.metadata,
			    rest = _objectWithoutProperties(_props2, ['onChange', 'country', 'metadata']);

			// Prevents React from resetting the `<input/>` caret position.
			// https://github.com/reactjs/react-redux/issues/525#issuecomment-254852039
			// https://github.com/facebook/react/issues/955


			var value = this.state.value;


			return _react2.default.createElement('input', _extends({}, rest, {
				ref: this.storeInput,
				value: this.format(value),
				onChange: this.onChange }));
		}
	}], [{
		key: 'getDerivedStateFromProps',

		// Prevents React from resetting the `<input/>` caret position.
		// https://github.com/reactjs/react-redux/issues/525#issuecomment-254852039
		// https://github.com/facebook/react/issues/955
		value: function getDerivedStateFromProps(_ref2) {
			var value = _ref2.value;

			return { value: value };
		}
	}]);

	return InputBasic;
}(_react.PureComponent)) || _class;

exports.default = InputBasic;
//# sourceMappingURL=InputBasic.js.map