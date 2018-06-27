'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = parsePhoneNumberCharacters;
exports.parsePhoneNumberCharacter = parsePhoneNumberCharacter;

var _inputFormat = require('input-format');

/**
 * Parses phone number characters from a string.
 * @param  {string} string
 * @return {string}
 * @example
 * ```js
 * parsePhoneNumberCharacters('8 (800) 555')
 * // Outputs '8800555'.
 * parsePhoneNumberCharacters('+7 800 555')
 * // Outputs '+7800555'.
 * ```
 */
function parsePhoneNumberCharacters(string) {
	var result = '';

	// Using `.split('')` here instead of normal `for ... of`
	// because the importing application doesn't neccessarily include an ES6 polyfill.
	// The `.split('')` approach discards "exotic" UTF-8 characters
	// (the ones consisting of four bytes) but digits
	// (including non-European ones) don't fall into that range
	// so such "exotic" characters would be discarded anyway.
	for (var _iterator = string.split(''), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var character = _ref;

		result += parsePhoneNumberCharacter(character, result) || '';
	}

	return result;
}

/**
 * `input-format` `parse()` function.
 * https://github.com/catamphetamine/input-format
 * @param  {string} character - Yet another character from raw input string.
 * @param  {string} value - The value parsed so far.
 * @param  {object} meta - Optional custom use-case-specific metadata.
 * @return {string?} The parsed character.
 */
function parsePhoneNumberCharacter(character, value) {
	// Only allow a leading `+`.
	if (character === '+') {
		// If this `+` is not the first parsed character
		// then discard it.
		if (value) {
			return;
		}

		return '+';
	}

	// Allow digits.
	return (0, _inputFormat.parseDigit)(character);
}
//# sourceMappingURL=parsePhoneNumberCharacters.js.map