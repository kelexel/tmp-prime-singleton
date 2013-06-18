
var prime = require('prime');
var SinglePrime = require('./single_prime.js');

module.exports = prime({
	constructor: function() {
		var foo = new SinglePrime('hello2');
	}
});
