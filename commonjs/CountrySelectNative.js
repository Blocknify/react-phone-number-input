'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountrySelectNative = (_temp2 = _class = function (_Component) {
	_inherits(CountrySelectNative, _Component);

	function CountrySelectNative() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, CountrySelectNative);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CountrySelectNative.__proto__ || Object.getPrototypeOf(CountrySelectNative)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (event) {
			var onChange = _this.props.onChange;

			onChange(event.target.value);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// storeSelectRef = (ref) => this.select = ref
	// ref={ this.storeSelectRef }

	_createClass(CountrySelectNative, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    name = _props.name,
			    value = _props.value,
			    options = _props.options,
			    disabled = _props.disabled,
			    tabIndex = _props.tabIndex,
			    className = _props.className,
			    SelectArrow = _props.selectArrowComponent;


			var selectedOption = options.filter(function (option) {
				return option.value === value;
			})[0] || options[0];
			var SelectedCountryFlag = selectedOption.icon;

			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)(className, 'react-phone-number-input__country--native') },
				_react2.default.createElement(SelectedCountryFlag, null),
				_react2.default.createElement(
					'select',
					{
						name: name,
						value: value,
						onChange: this.onChange,
						disabled: disabled,
						tabIndex: tabIndex,
						className: 'react-phone-number-input__country-select' },
					options.map(function (_ref2) {
						var value = _ref2.value,
						    label = _ref2.label;
						return _react2.default.createElement(
							'option',
							{ key: value || '-', value: value },
							label
						);
					})
				),
				_react2.default.createElement(SelectArrow, null)
			);
		}

		// toggle()
		// {
		// 	this.select.click()
		// }

	}]);

	return CountrySelectNative;
}(_react.Component), _class.propTypes = {
	selectArrowComponent: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
	selectArrowComponent: function selectArrowComponent() {
		return _react2.default.createElement('div', { className: 'react-phone-number-input__country-select-arrow' });
	} }, _temp2);
exports.default = CountrySelectNative;
//# sourceMappingURL=CountrySelectNative.js.map