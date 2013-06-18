
var prime = require('prime');
var SinglePrime = require('./single_prime.js');

var _instance;

var SinglePrime = prime({
	_foo: false,
	constructor: function(str) {
		console.log('SinglePrime constructor received str '+str);
		this._foo = str;
		_instance = this;
	}
});
module.exports = function(str) {
	if (_instance) console.log('found singleton instance');
	else console.log('singleton instance not found');
	return _instance ? _instance : new SinglePrime(str);
};