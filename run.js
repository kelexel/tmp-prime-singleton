var prime = require('prime');
var SinglePrime = require('./single_prime.js');
var RandomPrime = require('./random_prime.js');

// instantiate my singleton the first time
var foo = new SinglePrime('hello');

// instantiate a random prime, which will instantie SinglePrime a second time
var bar = new RandomPrime();

// invoke the singleton again, for the fun of it
var foo = new SinglePrime('hello3');

