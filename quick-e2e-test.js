/* jshint node: true */
'use strict';

// TODO: add support for dash into text

var Parser = require('./parser/parser'),
	Generator = require('./generator/generator'),
	Logger = require('logb').getLogger(module.filename);

// var input = [
// 	'when user clicks on submitButton and hover on it, then ciao is ciao and ola is ola',
// ];

// input.forEach(function(el) {
// 	var result;

// 	result = Parser.parse(el);

// 	console.log(JSON.stringify(result, null, 4));
// });

module.exports.generate = function(config) {
	var testMetadata, rawTestString;



	testMetadata = Object.keys(config).map(function(testName) {
		var result = {};

		result.name = testName;
		result.its = config[testName].test.map(function(scenario) {

			Logger.info('Generating test from', scenario);

			return {
				scenario: scenario,
				test: Parser.parse(scenario)
			};
		});

		return result;
	});

	// Logger.info('test,metadata', testMetadata);

	rawTestString = Generator.generate(testMetadata);


	return rawTestString;



};