'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLifecyclesCompat = require('react-lifecycles-compat');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputSmart = require('./InputSmart');

var _InputSmart2 = _interopRequireDefault(_InputSmart);

var _InputBasic = require('./InputBasic');

var _InputBasic2 = _interopRequireDefault(_InputBasic);

var _InternationalIcon = require('./InternationalIcon');

var _InternationalIcon2 = _interopRequireDefault(_InternationalIcon);

var _Flag = require('./Flag');

var _Flag2 = _interopRequireDefault(_Flag);

var _inputControl = require('./input-control');

var _countries = require('./countries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Allows passing custom `libphonenumber-js` metadata
// to reduce the overall bundle size.
var PhoneNumberInput = (0, _reactLifecyclesCompat.polyfill)(_class = (_temp = _class2 = function (_PureComponent) {
	_inherits(PhoneNumberInput, _PureComponent);

	function PhoneNumberInput(props) {
		_classCallCheck(this, PhoneNumberInput);

		var _this = _possibleConstructorReturn(this, (PhoneNumberInput.__proto__ || Object.getPrototypeOf(PhoneNumberInput)).call(this, props));

		_initialiseProps.call(_this);

		var _this$props = _this.props,
		    value = _this$props.value,
		    country = _this$props.country,
		    countries = _this$props.countries,
		    labels = _this$props.labels,
		    international = _this$props.international,
		    metadata = _this$props.metadata;

		// Will be removed in version 2.x.

		if (typeof _this.props.internationalIcon !== 'function') {
			throw new Error("You're passing a custom `internationalIcon` property to `react-phone-number-input` component. In the latest version it may only be a React component (a class or a function), not a React element. Wrap `internationalIcon` into a function to resolve the error: `() => internationalIcon`.");
		}

		var parsed_number = (0, _inputControl.parsePhoneNumber)(value, metadata);

		var pre_selected_country = (0, _inputControl.getPreSelectedCountry)(parsed_number, country, countries, international, metadata);

		_this.state = {
			// Workaround for `this.props` inside `getDerivedStateFromProps()`.
			props: _this.props,

			// The country selected.
			country: pre_selected_country,

			// Generate country `<select/>` options.
			country_select_options: generate_country_select_options(_this.props),

			// `parsed_input` state property holds non-formatted user's input.
			// The reason is that there's no way of finding out
			// in which form should `value` be displayed: international or national.
			// E.g. if `value` is `+78005553535` then it could be input
			// by a user both as `8 (800) 555-35-35` and `+7 800 555 35 35`.
			// Hence storing just `value`is not sufficient for correct formatting.
			// E.g. if a user entered `8 (800) 555-35-35`
			// then value is `+78005553535` and `parsed_input` is `88005553535`
			// and if a user entered `+7 800 555 35 35`
			// then value is `+78005553535` and `parsed_input` is `+78005553535`.
			parsed_input: generateParsedInput(value, parsed_number, _this.props),

			// `value` property is duplicated in state.
			// The reason is that `getDerivedStateFromProps()`
			// needs this `value` to compare to the new `value` property
			// to find out if `parsed_input` needs updating:
			// If the `value` property changed externally
			// then it won't be equal to state `value`
			// in which case `parsed_input` and `country` get updated.
			value: value
		};
		return _this;
	}

	// Country `<select/>` `onChange` handler.


	// Phone number `<input/>` `onKeyDown` handler.


	// `<input/>` `onChange` handler.
	// Updates `value` property accordingly.
	// (so that they are kept in sync).
	// `parsed_input` must be a parsed phone number
	// or an empty string.
	// E.g.: `""`, `"+"`, `"+123"`, `"123"`.


	// This `onBlur` interceptor is a workaround for `redux-form`
	// so that it gets the up-to-date `value` in its `onBlur` handler.
	// Without this fix it just gets the actual (raw) input field textual value.
	// E.g. `+7 800 555 35 35` instead of `+78005553535`.
	//
	// A developer is not supposed to pass this `onBlur` property manually.
	// Instead, `redux-form` passes `onBlur` to this component automatically
	// and this component patches that `onBlur` handler (a hacky way but works).
	//


	// When country `<select/>` is toggled.


	_createClass(PhoneNumberInput, [{
		key: 'onCountryChange',


		// Some people requested an `onCountryChange` event listener.
		// No valid reason was given other than compliance with some legacy code
		// which stored both phone number and country in a database.
		// https://github.com/catamphetamine/react-phone-number-input/issues/128
		value: function onCountryChange(new_country) {
			var onCountryChange = this.props.onCountryChange;
			var country = this.state.country;


			if (onCountryChange && new_country !== country) {
				onCountryChange(new_country);
			}
		}

		// Can be called externally.

	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    name = _props.name,
			    disabled = _props.disabled,
			    autoComplete = _props.autoComplete,
			    countrySelectTabIndex = _props.countrySelectTabIndex,
			    showCountrySelect = _props.showCountrySelect,
			    style = _props.style,
			    className = _props.className,
			    inputClassName = _props.inputClassName,
			    getInputClassName = _props.getInputClassName,
			    countrySelectProperties = _props.countrySelectProperties,
			    error = _props.error,
			    indicateInvalid = _props.indicateInvalid,
			    CountrySelectComponent = _props.countrySelectComponent,
			    inputComponent = _props.inputComponent,
			    smartCaret = _props.smartCaret,
			    ext = _props.ext,
			    countries = _props.countries,
			    labels = _props.labels,
			    _ = _props.country,
			    flags = _props.flags,
			    flagComponent = _props.flagComponent,
			    flagsPath = _props.flagsPath,
			    international = _props.international,
			    internationalIcon = _props.internationalIcon,
			    displayInitialValueAsLocalNumber = _props.displayInitialValueAsLocalNumber,
			    onCountryChange = _props.onCountryChange,
			    countrySelectHidesPhoneInputField = _props.countrySelectHidesPhoneInputField,
			    locale = _props.locale,
			    metadata = _props.metadata,
			    phoneNumberInputProps = _objectWithoutProperties(_props, ['name', 'disabled', 'autoComplete', 'countrySelectTabIndex', 'showCountrySelect', 'style', 'className', 'inputClassName', 'getInputClassName', 'countrySelectProperties', 'error', 'indicateInvalid', 'countrySelectComponent', 'inputComponent', 'smartCaret', 'ext', 'countries', 'labels', 'country', 'flags', 'flagComponent', 'flagsPath', 'international', 'internationalIcon', 'displayInitialValueAsLocalNumber', 'onCountryChange', 'countrySelectHidesPhoneInputField', 'locale', 'metadata']);

			var _state = this.state,
			    country = _state.country,
			    hidePhoneInputField = _state.hidePhoneInputField,
			    country_select_options = _state.country_select_options,
			    parsed_input = _state.parsed_input;


			var InputComponent = inputComponent || (smartCaret ? _InputSmart2.default : _InputBasic2.default);

			// Extract `countrySelectProperties` from `this.props`
			// also removing them from `phoneNumberInputProps`.
			var _countrySelectProps = {};
			if (countrySelectProperties) {
				for (var key in countrySelectProperties) {
					if (this.props.hasOwnProperty(key)) {
						_countrySelectProps[countrySelectProperties[key]] = this.props[key];
						delete phoneNumberInputProps[key];
					}
				}
			}

			return _react2.default.createElement(
				'div',
				{
					style: style,
					className: (0, _classnames2.default)('react-phone-number-input', {
						'react-phone-number-input--invalid': error && indicateInvalid
					}, className) },
				_react2.default.createElement(
					'div',
					{ className: 'react-phone-number-input__row' },
					showCountrySelect && _react2.default.createElement(CountrySelectComponent, _extends({}, _countrySelectProps, {
						ref: this.storeCountrySelectInstance,
						name: name ? name + '__country' : undefined,
						value: country,
						options: country_select_options,
						onChange: this.onCountrySelected,
						disabled: disabled,
						tabIndex: countrySelectTabIndex,
						hidePhoneInputField: this.hidePhoneInputField,
						focusPhoneInputField: this.focus,
						className: 'react-phone-number-input__country' })),
					!hidePhoneInputField && _react2.default.createElement(InputComponent, _extends({
						type: 'tel',
						name: name
					}, phoneNumberInputProps, {
						ref: this.storePhoneNumberInputInstance,
						metadata: metadata,
						country: country,
						value: parsed_input || '',
						onChange: this.onChange,
						onBlur: this.onBlur,
						onKeyDown: this.onPhoneNumberKeyDown,
						disabled: disabled,
						autoComplete: autoComplete,
						className: (0, _classnames2.default)('react-phone-number-input__phone',
						// Will be uncommented for version 2.x
						// {
						// 	'react-phone-number-input__phone--disabled' : disabled,
						// 	'react-phone-number-input__phone--invalid'  : error && indicateInvalid
						// },
						inputClassName, getInputClassName && getInputClassName({ disabled: disabled, invalid: error && indicateInvalid })) })),
					ext && !hidePhoneInputField && _react2.default.createElement(
						'label',
						{ className: 'react-phone-number-input__ext' },
						labels && labels.ext || 'ext.',
						_react2.default.cloneElement(ext, {
							type: ext.props.type === undefined ? 'number' : ext.props.type,
							className: (0, _classnames2.default)('react-phone-number-input__ext-input',
							// Will be uncommented for version 2.x
							// {
							// 	'react-phone-number-input__phone--disabled' : disabled,
							// },
							inputClassName, getInputClassName && getInputClassName({ disabled: disabled }), ext.props.className)
						})
					)
				),
				error && indicateInvalid && _react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)('react-phone-number-input__error', 'rrui__input-error') },
					error
				)
			);
		}
	}], [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(props, state) {
			var country = state.country,
			    hasChangedCountry = state.hasChangedCountry,
			    value = state.value,
			    _state$props = state.props,
			    old_default_country = _state$props.country,
			    old_value = _state$props.value;
			var metadata = props.metadata,
			    new_default_country = props.country,
			    new_value = props.value;

			// Emulate `prevProps` via `state.props`.

			var new_state = { props: props

				// If `countries` or `labels` or `international` changed
				// then re-generate country `<select/>` options.
			};if (props.countries !== state.props.countries || props.labels !== state.props.labels || props.international !== state.props.international) {
				new_state.country_select_options = generate_country_select_options(props);
			}

			// If the default country changed.
			// (e.g. in case of ajax GeoIP detection after page loaded)
			// then select it but only if the user didn't previously select
			// another country and no phone number has been entered so far.
			// Because if the user has already started inputting a phone number
			// then he's okay with no country being selected at all ("International")
			// and doesn't want to be disturbed, doesn't want his input to be screwed, etc.
			if (new_default_country !== old_default_country && !hasChangedCountry && !value && !new_value) {
				return _extends({}, new_state, {
					country: new_default_country
				});
			}
			// If a new `value` is set externally.
			// (e.g. as a result of an ajax API request
			//  to get user's phone after page loaded)
			// The first part — `new_value !== old_value` —
			// is basically `props.value !== prevProps.value`
			// so it means "if value property was changed externally".
			// The second part — `new_value !== value` —
			// is for ignoring the `getDerivedStateFromProps()` call
			// which happens in `this.onChange()` right after `this.setState()`.
			// If this `getDerivedStateFromProps()` call isn't ignored
			// then the country flag would reset on each input.
			else if (new_value !== old_value && new_value !== value) {
					var parsed_number = (0, _inputControl.parsePhoneNumber)(new_value, metadata);

					return _extends({}, new_state, {
						parsed_input: generateParsedInput(new_value, parsed_number, props),
						value: new_value,
						country: new_value ? parsed_number.country : country
					});
				}

			// Maybe `new_state.country_select_options` changed.
			// In any case, update `prevProps`.
			return new_state;
		}
	}]);

	return PhoneNumberInput;
}(_react.PureComponent), _class2.propTypes = {
	// Phone number in E.164 format.
	// E.g. "+12223333333" for USA.
	value: _propTypes2.default.string,

	// `onChange` handler is called each time
	// the phone number `<input/>` is edited.
	onChange: _propTypes2.default.func.isRequired,

	// `onBlur` is usually passed by `redux-form`.
	onBlur: _propTypes2.default.func,

	// `onKeyDown` handler (e.g. to handle Enter key press).
	onKeyDown: _propTypes2.default.func,

	// Some people requested an `onCountryChange` event listener.
	// No valid reason was given other than compliance with some legacy code
	// which stored both phone number and country in a database.
	// https://github.com/catamphetamine/react-phone-number-input/issues/128
	onCountryChange: _propTypes2.default.func,

	// Disables both the phone number `<input/>`
	// and the country `<select/>`.
	// (is `false` by default)
	disabled: _propTypes2.default.bool.isRequired,

	// Web browser's "autocomplete" feature
	// remembers the phone number being input
	// and can also autofill the `<input/>`
	// with previously remembered phone numbers.
	//
	// Default value: "tel".
	//
	// https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill
	//
	// "So when should you use autocomplete="off"?
	//  One example is when you've implemented your own version
	//  of autocomplete for search. Another example is any form field
	//  where users will input and submit different kinds of information
	//  where it would not be useful to have the browser remember
	//  what was submitted previously".
	//
	autoComplete: _propTypes2.default.string.isRequired,

	// Should the initially passed phone number `value`
	// be converted to a national phone number for its country.
	// (is `false` by default)
	displayInitialValueAsLocalNumber: _propTypes2.default.bool.isRequired,

	// The country to be selected by default.
	// Two-letter country code ("ISO 3166-1 alpha-2").
	country: _propTypes2.default.string,

	// Only these countries will be available for selection.
	// Includes all countries by default.
	countries: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,

	// Custom country `<select/>` option names.
	// E.g. `{ ZZ: 'Международный', RU: 'Россия', US: 'США', ... }`
	labels: _propTypes2.default.objectOf(_propTypes2.default.string),

	// Country flag icon components.
	// By default flag icons are inserted as `<img/>`s
	// with their `src` pointed to `flag-icon-css` github repo.
	// There might be cases (e.g. an offline application)
	// where having a large (3 megabyte) `<svg/>` flags
	// bundle is more appropriate.
	// `import flags from 'react-phone-number-input/flags'`.
	flags: _propTypes2.default.objectOf(_propTypes2.default.func),

	// Flag icon component.
	flagComponent: _propTypes2.default.func.isRequired,

	// A base URL path for national flag SVG icons.
	// By default it uses the ones from `flag-icon-css` github repo.
	flagsPath: _propTypes2.default.string.isRequired,

	// Whether to add the "International" option
	// to the list of countries.
	// By default it's added if the list of `countries` hasn't been overridden.
	international: _propTypes2.default.bool,

	// Custom "International" country `<select/>` option icon.
	internationalIcon: _propTypes2.default.func.isRequired,

	// Whether to show country `<select/>`.
	// (is `true` by default)
	showCountrySelect: _propTypes2.default.bool.isRequired,

	// HTML `tabindex` attribute for the country `<select/>`.
	countrySelectTabIndex: _propTypes2.default.number,

	// `<Phone/>` component CSS style object.
	style: _propTypes2.default.object,

	// `<Phone/>` component CSS class.
	className: _propTypes2.default.string,

	// `<input/>` CSS class.
	// Both for the phone number `<input/>` and
	// `react-responsive-ui` `<Select/>` autocomplete input.
	inputClassName: _propTypes2.default.string,

	// Returns phone number `<input/>` CSS class string.
	// Receives an object of shape `{ disabled : boolean?, invalid : boolean? }`.
	getInputClassName: _propTypes2.default.func,

	// Country `<select/>` component.
	//
	// Receives properties:
	//
	// * `name : string?` — HTML `name` attribute.
	// * `value : string?` — The currently selected country code.
	// * `onChange(value : string?)` — Updates the `value`.
	// * `options : object[]` — The list of all selectable countries (including "International") each being an object of shape `{ value : string?, label : string, icon : React.Component }`.
	// * `disabled : boolean?` — HTML `disabled` attribute.
	// * `tabIndex : (number|string)?` — HTML `tabIndex` attribute.
	// * `className : string` — CSS class name.
	//
	// Optional properties (should be ignored unless needed):
	//
	// * `hidePhoneInputField(hide : boolean)` — Can be called to show/hide phone input field. Takes `hide : boolean` argument. E.g. `react-responsive-ui` `<Select/>` uses this to hide phone number input when country select is expanded.
	// * `focusPhoneInputField()` — Can be called to manually focus phone input field. E.g. `react-responsive-ui` `<Select/>` uses this to focus phone number input after country selection in a timeout (after the phone input field is no longer hidden).
	//
	countrySelectComponent: _propTypes2.default.func.isRequired,

	// Phone number `<input/>` component.
	//
	// Receives properties:
	//
	// * `value : string` — The parsed phone number. E.g.: `""`, `"+"`, `"+123"`, `"123"`.
	// * `onChange(value : string)` — Updates the `value`.
	// * `country : string?` — The currently selected country. `undefined` means "International" (no country selected).
	// * `metadata : object` — `libphonenumber-js` metadata.
	// * All other properties should be passed through to the underlying `<input/>`.
	//
	// Must also implement `.focus()` method.
	//
	inputComponent: _propTypes2.default.func,

	// Set to `false` to use `inputComponent={InputBasic}`
	// instead of `input-format`'s `<ReactInput/>`.
	// Is `true` by default.
	smartCaret: _propTypes2.default.bool.isRequired,

	// For example, `react-responsive-ui` `<Select/>`
	// hides the phone number input field when expanded.
	// Is `false` by default.
	countrySelectHidesPhoneInputField: _propTypes2.default.bool.isRequired,

	// Phone number extension element.
	ext: _propTypes2.default.node,

	// An error message shown below the phone number `<input/>`.
	error: _propTypes2.default.string,

	// The `error` is shown only when `indicateInvalid` is true.
	indicateInvalid: _propTypes2.default.bool,

	// Translation.
	locale: _propTypes2.default.objectOf(_propTypes2.default.string),

	// `libphonenumber-js` metadata
	metadata: _propTypes2.default.shape({
		country_calling_codes: _propTypes2.default.object.isRequired,
		countries: _propTypes2.default.object.isRequired
	}).isRequired
}, _class2.defaultProps = {
	// Not disabled.
	disabled: false,

	// Remember (and autofill) the value as a phone number.
	autoComplete: 'tel',

	// Include all countries.
	countries: _countries.countries,

	// Flag icon component.
	flagComponent: _Flag2.default,

	// By default use icons from `flag-icon-css` github repo.
	flagsPath: 'https://lipis.github.io/flag-icon-css/flags/4x3/',

	// Default "International" country `<select/>` option icon (globe).
	internationalIcon: _InternationalIcon2.default,

	// Show country `<select/>`.
	showCountrySelect: true,

	// Don't convert the initially passed phone number `value`
	// to a national phone number for its country.
	// The reason is that the newer generation grows up when
	// there are no stationary phones and therefore everyone inputs
	// phone numbers with a `+` in their smartphones
	// so phone numbers written in international form
	// are gradually being considered more natural than local ones.
	displayInitialValueAsLocalNumber: false,

	// Set to `false` to use `inputComponent={InputBasic}`
	// instead of `input-format`'s `<ReactInput/>`.
	// Is `true` by default.
	smartCaret: true,

	// `react-responsive-ui` `<Select/>` sets this to true
	// to hide the phone number input field when expanded.
	countrySelectHidesPhoneInputField: false
}, _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.onCountrySelected = function (new_country) {
		var _props2 = _this2.props,
		    metadata = _props2.metadata,
		    onChange = _props2.onChange,
		    countrySelectHidesPhoneInputField = _props2.countrySelectHidesPhoneInputField;
		var _state2 = _this2.state,
		    old_parsed_input = _state2.parsed_input,
		    old_country = _state2.country;

		// After the new `country` has been selected,
		// if the phone number `<input/>` holds any digits
		// then migrate those digits for the new `country`.

		var new_parsed_input = (0, _inputControl.migrateParsedInputForNewCountry)(old_parsed_input, old_country, new_country, metadata);

		var new_value = (0, _inputControl.e164)(new_parsed_input, new_country, metadata);

		_this2.onCountryChange(new_country);

		// Focus the phone number `<input/>` upon country selection.
		// The default behaviour.
		if (!countrySelectHidesPhoneInputField) {
			_this2.focus();
		}

		_this2.setState({
			country: new_country,
			hasChangedCountry: true,
			parsed_input: new_parsed_input,
			value: new_value
		}, function () {
			// Update the new `value` property.
			// Doing it after the `state` has been updated
			// because `onChange()` will trigger `getDerivedStateFromProps()`
			// with the new `value` which will be compared to `state.value` there.
			onChange(new_value);

			// Focus the phone number `<input/>` upon country selection.
			// Doing it in a `setState()` callback because the phone number
			// `<input/>` is hidden while country `<select/>` is expanded.
			if (countrySelectHidesPhoneInputField) {
				_this2.focus();
			}
		});
	};

	this.onPhoneNumberKeyDown = function (event) {
		var onKeyDown = _this2.props.onKeyDown;

		// Actually "Down arrow" key is used for showing "autocomplete" ("autofill") options.
		// (e.g. previously entered phone numbers for `autoComplete="tel"`)
		// // Expand country `<select/>`` on "Down arrow" key press.
		// if (event.keyCode === 40) {
		// 	this.country_select.toggle()
		// }

		if (onKeyDown) {
			onKeyDown(event);
		}
	};

	this.onChange = function (parsed_input) {
		var _props3 = _this2.props,
		    onChange = _props3.onChange,
		    countries = _props3.countries,
		    international = _props3.international,
		    metadata = _props3.metadata;
		var country = _this2.state.country;


		if (parsed_input) {
			// If the phone number being input is an international one
			// then tries to derive the country from the phone number.
			// (regardless of whether there's any country currently selected)
			if (parsed_input[0] === '+') {
				country = (0, _inputControl.getCountryForParsedInput)(parsed_input, country, countries, international, metadata);

				_this2.onCountryChange(country);
			}
			// If this `onChange()` event was triggered
			// as a result of selecting "International" country
			// then force-prepend a `+` sign if the phone number
			// `<input/>` value isn't in international format.
			else if (!country) {
					parsed_input = '+' + parsed_input;
				}
		}

		// Generate the new `value` property.
		var value = (0, _inputControl.e164)(parsed_input, country, metadata);

		_this2.setState({
			parsed_input: parsed_input,
			value: value,
			country: country
		},
		// Update the new `value` property.
		// Doing it after the `state` has been updated
		// because `onChange()` will trigger `getDerivedStateFromProps()`
		// with the new `value` which will be compared to `state.value` there.
		function () {
			return onChange(value);
		});
	};

	this.onBlur = function (event) {
		var onBlur = _this2.props.onBlur;
		var value = _this2.state.value;


		if (!onBlur) {
			return;
		}

		// `event` is React's `SyntheticEvent`.
		// Its `.value` is read-only therefore cloning it.
		var _event = _extends({}, event, {
			target: _extends({}, event.target, {
				value: value
			})

			// For `redux-form` event detection.
			// https://github.com/erikras/redux-form/blob/v5/src/events/isEvent.js
		});_event.stopPropagation = event.stopPropagation;
		_event.preventDefault = event.preventDefault;

		return onBlur(_event);
	};

	this.hidePhoneInputField = function (hide) {
		_this2.setState({
			hidePhoneInputField: hide
		});
	};

	this.focus = function () {
		return _this2.number_input.focus();
	};

	this.storeCountrySelectInstance = function (_) {
		return _this2.country_select = _;
	};

	this.storePhoneNumberInputInstance = function (_) {
		return _this2.number_input = _;
	};
}, _temp)) || _class;

// Generates country `<select/>` options.


exports.default = PhoneNumberInput;
function generate_country_select_options(props) {
	var countries = props.countries,
	    labels = props.labels,
	    international = props.international;


	return (0, _inputControl.getCountrySelectOptions)(countries, labels, international).map(function (_ref) {
		var value = _ref.value,
		    label = _ref.label;
		return {
			value: value,
			label: label,
			icon: createCountrySelectOptionIconComponent(value, label, props)
		};
	});
}

function createCountrySelectOptionIconComponent(value, label, props) {
	var flags = props.flags,
	    flagsPath = props.flagsPath,
	    FlagComponent = props.flagComponent,
	    InternationalIcon = props.internationalIcon;


	if (value) {
		if(value == 'XK'){
			return function (props) {
				return _react2.default.createElement(FlagComponent, {
					country: value,
					flags: flags,
					flagsPath: "/icons/",
					className: props ? props.className : undefined });
			};
		}else{
			return function (props) {
				return _react2.default.createElement(FlagComponent, {
					country: value,
					flags: flags,
					flagsPath: flagsPath,
					className: props ? props.className : undefined });
			};
		}
	}

	return function (props) {
		return _react2.default.createElement(
			'div',
			{
				className: (0, _classnames2.default)('react-phone-number-input__icon', 'react-phone-number-input__icon--international', props && props.className) },
			_react2.default.createElement(InternationalIcon, null)
		);
	};
}

function generateParsedInput(value, parsed_number, props) {
	var displayInitialValueAsLocalNumber = props.displayInitialValueAsLocalNumber,
	    metadata = props.metadata;

	// If the `value` (E.164 phone number)
	// belongs to the currently selected country
	// and `displayInitialValueAsLocalNumber` property is `true`
	// then convert `value` (E.164 phone number)
	// to a local phone number digits.
	// E.g. '+78005553535' -> '88005553535'.

	if (displayInitialValueAsLocalNumber && parsed_number.country) {
		return (0, _inputControl.generateNationalNumberDigits)(parsed_number, metadata);
	}

	return value;
}
//# sourceMappingURL=PhoneInput.js.map