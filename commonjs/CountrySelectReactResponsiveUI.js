'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

// Could have been `import { Select } from 'react-responsive-ui'`
// but in that case Webpack bundles the whole `react-responsive-ui` package.


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Select = require('react-responsive-ui/commonjs/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountrySelectReactResponsiveUI = (_temp2 = _class = function (_Component) {
	_inherits(CountrySelectReactResponsiveUI, _Component);

	function CountrySelectReactResponsiveUI() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, CountrySelectReactResponsiveUI);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CountrySelectReactResponsiveUI.__proto__ || Object.getPrototypeOf(CountrySelectReactResponsiveUI)).call.apply(_ref, [this].concat(args))), _this), _this.onTabOut = function (event) {
			var focusPhoneInputField = _this.props.focusPhoneInputField;


			event.preventDefault();

			// Focus the phone number input upon country selection
			// (do it in a timeout because the `<input/>`
			//  is hidden while selecting a country)
			setTimeout(focusPhoneInputField, 0);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(CountrySelectReactResponsiveUI, [{
		key: 'render',


		// storeSelectRef = (ref) => this.select = ref
		// ref={ this.storeSelectRef }

		// toggle()
		// {
		// 	this.select.toggle()
		// }
		value: function render() {
			var _props = this.props,
			    name = _props.name,
			    value = _props.value,
			    onChange = _props.onChange,
			    options = _props.options,
			    disabled = _props.disabled,
			    tabIndex = _props.tabIndex,
			    className = _props.className,
			    hidePhoneInputField = _props.hidePhoneInputField,
			    ariaLabel = _props.ariaLabel,
			    closeAriaLabel = _props.closeAriaLabel,
			    saveOnIcons = _props.saveOnIcons,
			    nativeExpanded = _props.nativeExpanded,
			    maxItems = _props.maxItems,
			    inputClassName = _props.inputClassName,
			    toggleClassName = _props.toggleClassName;


			return _react2.default.createElement(_Select2.default, {
				name: name,
				value: value,
				onChange: onChange,
				options: options,
				disabled: disabled,
				tabIndex: tabIndex,
				className: (0, _classnames2.default)(className, {
					'react-phone-number-input__country--native-expanded': nativeExpanded
				}),
				onToggle: hidePhoneInputField,
				onTabOut: this.onTabOut,
				ariaLabel: ariaLabel,
				closeAriaLabel: closeAriaLabel,
				saveOnIcons: saveOnIcons,
				nativeExpanded: nativeExpanded,
				maxItems: maxItems,
				inputClassName: inputClassName,
				toggleClassName: toggleClassName,
				focusUponSelection: false,
				concise: true,
				autocomplete: true,
				autocompleteShowAll: true });
		}

		// Focuses phone number `<input/>` field
		// on tab out of the country `<select/>`.

	}]);

	return CountrySelectReactResponsiveUI;
}(_react.Component), _class.defaultProps = {
	// Whether to use native country `<select/>` when it's expanded.
	// Deprecated. Use `<PhoneInputNative/>` instead.
	nativeExpanded: false,

	// If set to `false`, then country flags will be shown
	// for all countries when country `<select/>` is expanded.
	// By default shows flag only for currently selected country.
	// (is `true` by default to save user's traffic
	//  because all flags are about 3 MegaBytes)
	saveOnIcons: true }, _temp2);
exports.default = CountrySelectReactResponsiveUI;
//# sourceMappingURL=CountrySelectReactResponsiveUI.js.map