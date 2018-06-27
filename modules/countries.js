'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.countries = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // A list of all country names
// sorted by country code.


var _countries = require('./countries.json');

var _countries2 = _interopRequireDefault(_countries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A list of all country codes.
var countries = exports.countries = [];

// Country code to country name map.
var default_country_names = {
	// From ISO 3166-1:2006(E/F):
	//
	// 8.1.3   User-assigned code elements
	//
	// If users need code elements to represent country names not included
	// in this part of ISO 3166, the series of letters AA, QM to QZ, XA
	// to XZ, and ZZ, and the series AAA to AAZ, QMA to QZZ, XAA to XZZ,
	// and ZZA to ZZZ respectively, and the series of numbers 900 to 999
	// are available. These users should inform the ISO 3166/MA of such use.
	//
	ZZ: 'International'

	// Populate country codes and country names.
};for (var _iterator = _countries2.default, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	var _ref;

	if (_isArray) {
		if (_i >= _iterator.length) break;
		_ref = _iterator[_i++];
	} else {
		_i = _iterator.next();
		if (_i.done) break;
		_ref = _i.value;
	}

	var country = _ref;

	var _country = _slicedToArray(country, 2),
	    code = _country[0],
	    name = _country[1];

	countries.push(code);
	default_country_names[code] = name;
}

exports.default = default_country_names;
//# sourceMappingURL=countries.js.map